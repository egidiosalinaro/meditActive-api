<a name="readme-top"></a>

  <h1 align="center">🧘🏼‍♀️ MeditActive API 🧘🏽‍♂️</h1>

  <p align="center">
  a JSON RESTful API created to manage the back-end features of a meditation app.
  </p>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project-question">About The Project</a>
      <ul>
        <li><a href="#built-with-bricks">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-clapper">Getting Started</a>
      <ul>
        <li><a href="#prerequisites-pencil">Prerequisites</a></li>
        <li><a href="#installation-gear">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage-joystick">Usage</a>
      <ul>
        <li><a href="#users-standing_person">Users</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#intervals-timer_clock">Intervals</a></li>
      </ul>
    </li>
    <li><a href="#roadmap-world_map">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project :question:

The goal of the project is to deliver the back-end structure aimed to manage an hypothetical application dedicated to meditation. I used `Node.js` (with `Express` framework) and `MongoDB` database for the purpose.

The API structure is made up of three data Schemas:

- `users`: data about app subscribers
- `intervals`: timeframes during which users try to achieve their meditation goals
- `goals`: the main topic of the meditation app, challenges that users try to win

Using the correct relevant endpoints you can interact with users, intervals and goals and <strong>_create_, _read_, _update_</strong> and <strong>_delete_</strong> them. Furthermore, you can <strong>_search_</strong> through intervals using queries and <strong>_join_</strong> any goal to an interval.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With :bricks:

<p>
<div style="display:flex;  align-items:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> JavaScript ES6</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/6fa796d2-1a65-418f-beb2-d2f3b4b7cfae" alt="Node.js" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Node.js</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/dc79390b-0a0c-427b-a27a-5bfc996b8d74" alt="express" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Express</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/nodemon" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/dc4ca9ac-ebb3-4f0f-b996-e2ded61b9321" alt="nodemon" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Nodemon</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/8c11269d-5b85-4ac4-aeca-f72770507c1f" alt="axios" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Dotenv</div><br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/helmet" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/5885a573-8bc5-400e-8ea2-d787f63b8f34" alt="helmet" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Helmet</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/morgan" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/362b9707-0ada-4944-a209-92808fa84ae5" alt="morgan" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Morgan</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/mongoose" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/6320d16a-a96f-42a8-bdad-3eac87841776" alt="mongoose" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Mongoose</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.mongodb.com" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/e2b8cd9f-50a8-40ba-bc29-e263378d3b0b" alt="mongodb-memory-server" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Mongodb Memory Server</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/jest" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/65af32f3-6b76-4818-821a-9eb46b3c89a8" alt="jest" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Jest</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/supertest" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/meditActive-api/assets/129901135/3aa86af9-1881-44a2-9850-89ab1da8a817" alt="supertest" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Supertest</div>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started :clapper:

I used `Node.js` to bootstrap this project. You can install it [here](https://nodejs.org/en). <br>
Once installed, you are ready to go:

### Prerequisites :pencil:

- verify you installed Node.js correctly by checking its version on your computer
  
  ```sh
  node -v
  ```
  ```sh
  npm -v
  ```
- clone this repository
  
  ```sh
  git clone https://github.com/egidiosalinaro/meditActive-api
  ```
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation :gear:

Once downloaded this repo, in the project directory, you can:

- connect your MongoDB database

  create a `.env` file (you won't find mine because it is in the `.gitignore` list) containing an enviroment variable named `DB_URI` calling your MongoDB connection string (see the `DB_URI` environment variable in action in the file `databaseConnection.js`) <br>
  Example: `DB_URI="mongodb+srv://...`

- install libraries and dependencies
  ```sh
  npm install
  
- test the app
  ```sh
  npm test
  ```

- run the app
  ```sh
  npm start
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage :joystick:

You can use this API on the port 5000 via platforms like Postman, Thunderclient or Insomnia.
The first parameter of every path is the name of the app itself `/meditactive`

### Users 🧍

- <ins><strong>_GET_</strong></ins> a list of all users from the database <br>
  `/meditactive/users`

- add a new user to the database with a <ins><strong>_POST_</strong></ins> request <br>
  `/meditactive/users`
  ```json
  {
      "name": "insert an alphanumeric string, min 2 characters",
      "surname": "insert an alphanumeric string, min 2 characters",
      "email": "insert a valid email"
  }
  ```

- <ins><strong>_GET_</strong></ins> a specific user's details* <br>
  `/meditactive/users/:id`

- update a user with a <ins><strong>_PUT_</strong></ins> request* <br>
  `/meditactive/users/:id`

- <ins><strong>_DELETE_</strong></ins> a user from the database* <br>
  `/meditactive/users/:id`

*(:id must be a valid MongoDB id)
  
### Goals 🎯 🥅

- <ins><strong>_GET_</strong></ins> a list of all goals from the database <br>
  `/meditactive/goals`

- add a new goal to the database with a <ins><strong>_POST_</strong></ins> request <br>
  `/meditactive/goals`
  ```json
  {
      "title": "insert an alphanumeric string, min 2 characters",
      "description": "insert an alphanumeric string, min 2 characters",
      "days": "insert a number"
  }
  ```

- <ins><strong>_GET_</strong></ins> a specific goal's details* <br>
  `/meditactive/goals/:id`

- update a goal with a <ins><strong>_PUT_</strong></ins> request* <br>
  `/meditactive/goals/:id`

- <ins><strong>_DELETE_</strong></ins> a goal from the database* <br>
  `/meditactive/goals/:id`

*(:id must be a valid MongoDB id)

### Intervals ⏲️

- <ins><strong>_GET_</strong></ins> a list of all intervals from the database <br>
  `/meditactive/intervals`

- add a new interval to the database with a <ins><strong>_POST_</strong></ins> request <br>
  `/meditactive/intervals`
  ```json
  {
      "user": "insert a valid mongoID related to an existing user",
      "starting": "insert a valid ISO date",
      "ending": "insert a valid ISO date"
  }
  ```

- join an interval with a goal using a <ins><strong>_PUT_</strong></ins> request* <br>
  `/meditactive/intervals/:id`
   ```json
  {
      "relatedGoal": "insert a valid mongoID related to an existing goal"
  }
  ```

- <ins><strong>_GET_</strong></ins> a list of intervals filtered by queries <br>
  `/meditactive/intervals/filter`

    Filter parameters:
     - user: insert a valid mongoID related to the `user` field
     - start: insert a valid ISO date for the `starting` field
     - end: insert a valid ISO date for the `ending` field
     - goal: insert a valid mongoID related to the `relatedGoal` field
  
    example: `meditactive/intervals/filter?goal=6335c098bb3ddb89f54cd3d6&start=2023-10-01`

- <ins><strong>_GET_</strong></ins> a specific interval's details* <br>
  `/meditactive/intervals/:id`

- update an interval with a <ins><strong>_PUT_</strong></ins> request* <br>
  `/meditactive/intervals/:id`

- <ins><strong>_DELETE_</strong></ins> an interval from the database* <br>
  `/meditactive/intervals/:id`

*(:id must be a valid MongoDB id)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap :world_map:

- [x] `.env` file containing mongoDB key
- [x] functions to connect/disconnect to database via `mongoose`
- [x] app configuration
    - [x] logger
    - [x] security middleware
    - [x] initializing routes
    - [x] error handling middlewares
- [x] server main file
- [x] creating Schemas and models
- [x] routes files
    - [x] intervals routes
       - [x] mongoose `find` method for filtering queries
    - [x] users routes
    - [x] goals routes
    - [x] adding `.next` to catch error middlewares if needed
- [x] testing all routes and errors with `jest` and `supertest`
- [x] final code cleaning and code consistency

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

egidiosalinaro@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
