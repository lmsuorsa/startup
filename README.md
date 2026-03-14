# Liar's Dice!

[My Notes](notes.md)

Each player starts with 5 dice. At the beginning of a round, players roll their dice to get values. With each turn, a player must either up the ante on the number or value of dice. For example, if the current bet was "two 3's", the next call could be "three 3's" (raising the number) or "two 4's" (raising the value). If a player believes the current bet is not in the combined pool of dice, they can call the bluff, ending the round. Everyone shows their dice. If the accuser is right, the better loses a die. If the better is right, the accuser loses a die. Play until only one player remains.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

As seen in Pirate's of the Caribbean, Liar's Dice is the game of choice among scallywags at sea. To put it simply, you can raise the number of dice, the value of the dice, or call out the last man for being a dirty liar and empty his cup! It's simple, engaging, and anyone can win if they play their hand right, making it fun for everyone involved. Try your luck (without gambling decades of service in Davy Jone's crew!)

### Design

![Design image](startupSpec.png)

### Key features

- Secure login over HTTPS
- Ability to either raise bet in either number or value
- Ability to call bluff on previous bet
- Real-time display of the current and previous bets
- Real-time display of current number of dice on the board
- Real-time display of the values of YOUR dice
- Results are persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Used to create structural and organizational elements. 3 HTML pages. One for login, gameplay and an index page.
- **CSS** - Used to style and animate the web pages.
- **React** - Provides login, choice display for making bets, display's other user's bets, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving bets
  - submitting bets
  - retrieving round results
  - pull pirate quotes/pictures from third party databases
- **DB/Login** - Store users in database
- **WebSocket** - As users play against each other, their bets are displayed live to other players on the board.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://liarsdice.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - `index.html` for login, `play.html` for the game, and `about.html` for game instructions and pirate pictures.
- [x] **Proper HTML element usage** - Correct use of `head`, `body` (containing `header`, `main`, and `footer`), `table`, lists, paragraphs, and `img` elements.
- [x] **Links** - Links between pages in menu.
- [x] **Text** - `about` page contains text.
- [x] **3rd party API placeholder** - `about` page will display images of pirates
- [x] **Images** - Image on `about` page
- [x] **Login placeholder** - Placeholder for auth on the login page.
- [x] **DB data placeholder** - Player win counts displayed next to names during game.
- [x] **WebSocket placeholder** - Playing involves live interaction with other players.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - Used `main.css` for styling.
- [x] **Use of a CSS framework** - Used bootstrap.
- [x] **All visual elements styled using CSS** - Created and imported a `main.css` file.
- [x] **Responsive to window resizing using flexbox and/or grid display** - `@media` rules and `flex` styling to handle window resizing.
- [x] **Use of a imported font** - Used Helvetica.
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - Styled different types of selectors in `main.css`.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I bundled the deliverable with Vite.
- [x] **Components** - I converted each HTML page into React components using JSX.
- [x] **Router** - I used a BrowserRouter to inject page components into the DOM, making my site a single-page application.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - Core game logic fully implemented. Authentication mocked using localStorage.
- [x] **Hooks** - I make extensive use of React hooks (useState, useEffect) in app components.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - `service/index.js` creates an Express app, defines routes, and listens on a port.
- [x] **Static middleware for frontend** - `app.use(express.static('public'))` serves built frontend files.
- [x] **Calls to third party endpoints** - Use a CORS proxy in my backend (which makes external requests) to serve pirate insults in `about` page.
- [x] **Backend service endpoints** - Endpoints for `/auth/create`, `/auth/login`, `/auth/logout`, `/wins`, `/win`, and `/pirate-insult`.
- [x] **Frontend calls service endpoints** - Frontend fetches from `/api/wins`, `/api/win`, `/api/auth/*`, and `/api/pirate-insult`.
- [x] **Supports registration, login, logout, and restricted endpoint** - Registration, login, logout all work. `/api/wins` and `/api/win` are protected by verifyAuth, which checks the auth cookie.
- [x] **Uses BCrypt to hash passwords** - Yes, `bcrypt.hash` in create and `bcrypt.compare` in login.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
