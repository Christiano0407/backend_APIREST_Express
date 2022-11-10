# backend_APIREST_Express

Create a project using an API REST with Node Js and Express Js.

## Platzi

- [Platzi](https://platzi.com/home);

## NodeJs

> Documentation

- [NodeJs](https://nodejs.org/en/docs/)

## Markdown

- [Markdown](https://www.youtube.com/watch?v=oxaH9CFpeEE&t=1s)

## EsLint

- [ESLint](https://eslint.org/)

## Prettier

- [Prettier](https://prettier.io/)

## JsHint

- [JsHint](https://www.npmjs.com/package/jshint)

## Express Js

- [ExpressJs](https://expressjs.com/es/)

```javascript

const express = require(`express`);
const app = express();
const port = process.env.port || 3000;
//*? === Routing === */
app.get('/', (req, res) => {
  res.send('Hello World');
});
//*? === Listen Port === */
app.listen(port, () => {
  console.log(`Server is running in Port http://localhost:${port}...`);
});


```

## Apollo Server

> Compatibility With Graphql and Working with Backend

[Apollo_Server](https://www.apollographql.com/docs/)

## GraphQL

> a query language for APIs

[GraphQL](https://graphql.org/)

## Nodemon

> NodeJs

- [nodemon](https://nodemon.io/)

```javascript

// => Install Global
npm install -g nodemon

// => Install Development Dependency
npm install --save-dev nodemon

//nodemon ./server.js  ==> (localhost 8080 / 3000)

```

> Run Dev (Desarrollo)

```javascript
run server
npm run => "dev": "nodemon app.js",

```

> Run Production

```javascript
run server
npm run =>  "start": "node app.js",

```

## NPM

- [npm](https://www.npmjs.com/)

## GitIgnore

> gitignore.io

[gitignore.io](https://www.toptal.com/developers/gitignore/)

## Config Good Practice (Project ESlint & Prettier & Nodemon)

> Config Project & Install

```javascript

npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

```

## MIT LICENSE

MIT License

Copyright (c) 2022 Chris_Velázquez04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
