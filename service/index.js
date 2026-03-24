const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// service port; front-end code statically hosted by service on same port
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// parse JSON body
app.use(express.json());

// track auth token cookies
app.use(cookieParser());

// serve front-end static content hosting
app.use(express.static('public'));

// router for service endpoints
var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    await DB.updateUserRemoveAuth(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// verify user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// get all wins
apiRouter.get('/wins', verifyAuth, async (req, res) => {
  const wins = await DB.getLeaders();
  res.send(wins);
});

// submit a win
apiRouter.post('/win', verifyAuth, async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ msg: 'Missing name' })
  }
  const leaders = await updateWins(name);
  res.send(leaders);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// updateWins
async function updateWins(playerName) {
  const existing = await DB.getWinByName(playerName);
  let newWins;

  if (existing) {         // player exists, increment wincount
    newWins = existing.wins + 1;
    await DB.updateWin(playerName, newWins);
  } else {                  // new player, create entry with 1 win
    newWins = 1;
    await DB.addWin({ name: playerName, wins: 1 });
  }

  // return updated leaderboard
  return DB.getLeaders();
}

// proxy for pirate insult to fix CORS block
apiRouter.get('/pirate-insult', async (req, res) => {
  try {
    const response = await fetch('https://pirate.monkeyness.com/api/insult');
    const insult = await response.text();
    res.send({ insult });
  } catch (error) {
    res.status(500).send({ msg: 'Failed to fetch insult' });
  }
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});