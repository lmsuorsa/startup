# CrossWordPuzz!

[My Notes](notes.md)

A brief description of the application here. A brief modification of the application here! Another brief modification here, this time coming from the GitHub webconsole. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Do you love crossword puzzles? Do you love races and competitions? Well then you'll love my website! Once a day, all users will receive the same crossword puzzle for them to complete. As they solve it, they will also be able to see the progress (in percentage) of other users who started at the same time. On top of that, they will be able to see the leaderboards for the fastest solvers of the day! With the pressure on, will you be able to win?

### Design

![My image](startupSpec.png)

### Key features

- Secure login over HTTPS
- Ability to solve the crossword puzzle of the day
- Real-time display of progress of other users who started at the same time
- Real-time display of leaderboards for fastest solvers of the day's puzzle
- Leaderboards for previous puzzles stored in leaderboards page
- User stats on previous puzzles viewable on their profile

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Used to create structural and organizational elements. 4 HTML pages. One for login, crossword puzzle, leaderboards, and user profiles.
- **CSS** - Used to style and animate the web pages.
- **React** - Provides login, crossword, leaderboard, backend endpoint calls.
- **Service** - Backend service with endpoints for
    - retrieving times from finished puzzles
    - retrieving percentage from other users doing the puzzle
    - crossword puzzles from third party database
    - Register, login, and logout users. Credentials securely stored in database. Can't play unless you create an account.
- **DB/Login** - Store users, user stats, and leaderboards in database.
- **WebSocket** - As users complete the puzzle of the day, their percentage complete will be shown to other users completing the puzzle. When they finish, their times will appear in the leaderboards.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://crosswordpuzz.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created login (index), play, profile, leaderboards, and about pages.
- [x] **Proper HTML element usage** - I use html elements properly in these pages.
- [x] **Links** - I use links to get to each page of the website. 
- [x] **Text** - I use text in these html pages.
- [x] **3rd party API placeholder** - I hope to find a 3rd party API to pull crossword puzzles from, but if that isn't possible I will add quotes to my 'about' page.
- [x] **Images** - I put a very cool tiger in my about page.
- [x] **Login placeholder** - The index.html page has a login/account creation placeholder
- [x] **DB data placeholder** - Player times and ranks will be stored on their profiles and in the leaderboards page.
- [x] **WebSocket placeholder** - In the 'play' page, clients will communicate with the server to see the leaderboards and progress of other racers.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I created a header, footer, and main content styling in `main.css`
- [x] **Navigation elements** - I created navigation elements in the header using bootstrap.
- [x] **Responsive to window resizing** - The windows of my pages dynamically resize with the window using bootstrap and display:flex
- [x] **Application elements** - Used display:flex and nested div groups to get behavior I wanted as window size changes
- [x] **Application text content** - Set text font to Helvetica
- [x] **Application images** - I gave the about image the ability to stretch horizontally for comedic effect.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I bundled my project using Vite and rearranged the structure to be compatible with the tool.
- [x] **Components** - I ported the .html pages of my website to jsx components.
- [x] **Router** - I used the router to navigate between different pages of my website.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


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
