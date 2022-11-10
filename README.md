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

## API / APIREST / RESTful API

> ¿Qué es una API?

Aplication Programming Interface (Interfaz de programación de aplicaciones).

[MDN_API](https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/API)
[Referencia_API](https://developer.mozilla.org/es/docs/Web/API)

> Fetch

La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red).

[MDN_Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

> REST

Representational State Transfer. Estilo de arquitectura de software para sistemas hepermedia distribuidos como la "World Wide Web".

> API & REST (RESTful API)

RESTFul API: Es una "API", basada en "REST".

> Web Article

[APIRESTful](https://aldeahost.com.mx/todo-lo-que-necesitas-saber-sobre-el-web-service/)

![APIRESTful](https://static.platzi.com/media/user_upload/Captura-d336ab2e-8e2d-40a4-808a-ee3da1fbdaef.jpg);

## Model Client & Server

> ( HTTP,HTTPS,APi REST)

> HTTP & HTTPS ( Hypertext Transfer Protocol )

Protocolo de Transferencia de Hipertexto.

Modelo que usamos para acceder a Internet y obtener recursos e información.

> El protocolo HTTP, define el formato de los mensajes (request).

Un protocolo, es un conjunto de reglas que permiten transmitir información entre dispositivos de una red.

> Client (Cliente)

El Navegador desde el cual se realizan solicitudes a un servidor.

> Server (Servidor)

Programa que se ejecuta en un servidor físico para ofrecer un servicio al cliente. Envía información.

El servidor conoce el formato esperado del mensaje que envía el cliente. Además, el cliente, conoce el formato esperado del mensaje que recibe del servidor.

> Solicitud (Request) HTTP

- Métodos HTTP
- Caminos (Path)
- Versiones HTTP
- Cabeceras (Headers)
- Curpo (body)

> Headers (Cabeceras)

Proveen información adicional sobre la solicitud.

> Body (Cuerpo)

Contiene la información que debe ser enviada al servidor para procesar la solicitud. Formato JSON. No se incluye en todas las solicitudes (requieren enviar información como: POST y PUT).

> HTTPS

Le agrega una capa extra de seguridad.

> Método (Method) HTTP

Verbo ("verbos HTTP") o solicitud que indica la intención de la solicitud.

- GET (para Solicitar un recurso específico).
- POST (Para Crear un recurso específico. Agregar ususarios nuevos a una base de datos).
- PUT (Para Modificar un recurso específico. Hacer un cambio en una base de datos.)
- DELETE (Para Eliminar un recurso específico).

![](https://static.platzi.com/media/user_upload/REST-65e4240f-662b-406e-91c9-57d8b0dd56f4.jpg)

> Respuesta (Response) HTTP

- Código de estado (200, 404...etc).
- Texto de Estado.
- Texto de Estado.
- Cabeceras (Headers).
- Cuerpo (Body).

> Código de Estado HTTP

[HTTP_State](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

> Números que indican si se han completado exitosamente o no, las solicitudes HTTP.

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- Errores de los servidores (500–599).

> Más comunes

- 200 OK: La respuesta fue exitosa.
- 400 Bad Request: El servidor no pudo interpretar la solicitud.
- 404 Not Found: El mservidor no pudo encontrar el recurso solicitado.
- 500 Internal Server Error: El servidor encontró una situación que no sabe cómo manejar.

![Status](https://camo.githubusercontent.com/0294f63543e7574885567ce08f9cea150b0972e0dbfa682d5e0b07e2423b3e62/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464452304f4d6d57514141486364573f666f726d61743d6a7067266e616d653d343039367834303936)

> Características / Characters

- Routing
- Enfócate en alto rendimiento
- Nos permite desarrollar aplicaciones de Node.js más rápidamente con código conciso.

> CRUD (Create, Read, Update, Delete)

(Crear, Leer, Actualizar, Eliminar) Operaciones básicas que se pueden realizar con la información almacenada.

> CRUD & HTTP

CRUD & HTTP (Method) => Create == POST, Read == GET, Update == PUT, Delete == DELETE.

> CRUD & API (Application Programming Interface)

API: Interfaz de Programación de aplicaciones. Permite que dos o más programas se comuniquen entre si.

Nos permite que un software ofrezca un servicio a otro software.

La "API", no son usadas directamente por el usuario sino por el programador que usa la "API", para implementar su programa.

Normalmente usamos el formato "JSON".

> API Tool (Rapid API)

[Rapid_api](https://rapidapi.com/hub)

> Endpoints

Los endpoints son las URLs de un API o un backend que responden a una petición. Los mismos entrypoints tienen que calzar con un endpoint para existir. Algo debe responder para que se renderice un sitio con sentido para el visitante.

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
