const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();

// wins and users saved in memory, disappear when service restarted
let users = [];
let wins = [];  // entries format: { name: string, wins: int }

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

// CreateAuth a new user
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
    delete user.token;
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
apiRouter.get('/wins', verifyAuth, (req, res) => {
  res.send(wins);
});

// submit a win
apiRouter.post('/win', verifyAuth, (req, res) => {
  wins = updateWins(req.body);
  res.send(wins);
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
function updateWins(playerName) {
  const index = wins.findIndex(entry => entry.name === playerName);

  if (index >= 0) {         // player exists, increment wincount
    wins[index].wins += 1;
  } else {                  // new player, create entry with 1 win
    wins.push({ name: playerName, wins: 1 });
  }

  // sort wins in descending order
  wins.sort((a,b) => b.wins - a.wins);

  return wins;
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = { email, password: passwordHash, token: uuid.v4() };
  users.push(user);
  return user;
}

async function findUser(field, value) {
  return users.find(u => u[field] === value);
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