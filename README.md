# AngularProject
SoftUni Ads SPA

### Description

AngularProject is a simple single page application (SPA) that lets you publish, edit and delete your ads. You can also see all ads.

### Tech

AngularProject uses a number of open source projects to work:
* [MongoDB](https://www.mongodb.com) - Free and open-source cross-platform document-oriented database
* [Mongoose](http://mongoosejs.com/index.html) - Elegant MongoDB object modeling for NodeJS
* [NodeJS](https://nodejs.org/en/) - Evented I/O for the backend
* [ExpressJS](https://expressjs.com) - Fast, unopinionated, minimalist web framework for NodeJS
* [JSONWebToken](https://jwt.io) - Used for authorization
* [Angular](https://angular.io) - Platform that makes it easy to build applications with the web

The goal of this project is to show the core concepts of building SPA with ExpressJS and Angular. 

### Installation

To start the server (port: 5000): open new cmd window (in project root) and run

```sh
$ cd server
$ npm install (if you havent already installed the dependencies)
$ npm start
```

To start the client (port: 4200): open new cmd window (in project root) and run

```sh
$ cd client
$ npm install (if you havent already installed the dependencies)
$ ng serve
```

### Features

- Anonymous users
    - Login/Register
    - View all ads
    
- Authenticated users
    - View ads details
    - Create ads
    - Edit their ads
    - Delete their ads
    
- Admin users
    - Delete every ads
    - Delete every user

