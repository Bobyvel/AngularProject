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

The goal of this project is to show the core concepts of building SPA with ExpressJS and Angular. In this project I've used:

* Wrapped each major feature into a module
* Lazy-loading for most of the modules so the app can start faster
* Preload lazy-loaded modules after the app starts so they can be ready for use as soon as possible
* Services for each major feature
* Guards to prevent unauthorized users to view routes that require authentication or admin rights
* Interceptors for attaching JWT token to the request headers, showing notifications from the server response and error handling
* Custom directives
* Custom pipes
* TypeScript models
* Reactive forms for handling user input

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
    - View ads details

- Authenticated users
    - Create ads
    - Edit their ads
    - Delete their ads
    
- Admin users
    - Delete every ads
    - Delete every user


