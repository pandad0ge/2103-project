# ICT 2103 Project (Property Listing Site) Documentation


  This is the implementation of our ICT2103 Project done by:
| Student | Student ID |
| ------------- |:-------------:|
|Zemus Koh Tzen Kit|  2103094|
|Fabian Chua |2101506|
|Shaun Sartra Varghese | 2102172 |
|Kok Chee Hong| 2101240|
|Pang Ka Ho |2102047|
|Norman Chia |2100686|
<div align="center">
  <p align="center">
    <br />
    <a href="https://youtu.be/D4aqQ2wtcCA" target="_blank" >Watch the demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project
![Product Screenshot](https://iili.io/HfAjZJa.png)

<p align="center"><small>Screenshot of our project</small> 
</p>
Our web application aims to help connect people to the right home as easily as possible. Its target users are potential home buyers, sellers, renters and real estate agents, with a variety of tools to cater to their separate needs and requirements. 


The recent spike in demand for housing in Singapore means more users needing an overview of the market and our application aims to be a platform for every kind of potential user.

## Project Presentation
[![Watch the presentation](https://img.youtube.com/vi/D4aqQ2wtcCA/hqdefault.jpg)](https://youtu.be/D4aqQ2wtcCA)

## Built With

![HfAXNXS.png](https://iili.io/HfAXNXS.png)
MERN Stack Architecture

Frontend - React
Backend - Implemented with RBDMS MySQL

Future implementations for mongoDB.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Database Installation

1. Spin up MySQL instance on `localhost:3306`
2. Create `2103db`
3. Select `2103db` 
4. Run query from `dbSetupOneInsertFinal.sql`
5. All the data should be loaded on `2103db`

### Client Installation

In the master branch, you have two different folders, client (the React app) and server (an Express application offering REST API endpoints).

The applications can be examined separately. The React application uses a database.

#### In `client` directory

You may run the React client with `npm run start` in the client directory to boot up the client. The web application should automatically open your browser on localhost:3000.

```bash
$ npm install
$ npm run start
# dev server with hot reload at http://localhost:3000
```

#### In `server` directory

You may run the API server with node server.js (or nodemon server.js) 

```bash
$ npm install
$ npm run dev
# server will be set up on localhost:5000
```

### Basic usage
Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.