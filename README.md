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
    <li><a href="#usage-joystick">Usage</a></li>
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
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="Node.js" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Node.js</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="express" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Express</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="nodemon" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Nodemon</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noreferrer"> <img src="https://github.com/egidiosalinaro/hackernews-noframework/assets/129901135/8c11269d-5b85-4ac4-aeca-f72770507c1f" alt="axios" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Dotenv</div><br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="helmet" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Helmet</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="morgan" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Morgan</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="mongoose" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Mongoose</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="mongodb-memory-server" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Mongodb Memory Server</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="body-parser" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> body-parser</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="jest" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Jest</div> <br>
<div style="display:flex;  align-items:center;"><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="<!--INSERIRE IMMAGINE-->" alt="supertest" width="40" height="40" style="border-radius:100%; margin-right:9px;"/> </a> Supertest</div>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
