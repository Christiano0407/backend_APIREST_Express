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

## NESTJs

> A progressive Node.js framework for building efficient, reliable and scalable server-side applications.

[nest_js](https://nestjs.com/)

## Faker Js

[faker_js](https://fakerjs.dev/)

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

> HTTPS (Hypertext Transfer Protocol (HTTP))

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

[HTTP_MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)

[HTTP_Cat](https://http.cat/)

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

> Params (Parámetros) ==> ":"

```javascript

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'player soccer',
      price: 1750,
    },
    {
      name: 'Shoes soccer',
      price: 3500,
    },
  ]);
});

app.get('/categories/:categoriesId/products/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params;

  res.json({
    categoriesId,
    productsId,
  });
});

```

> Query Parameters (GET:parámetros query) => Filtrar ("?", "size", "limit", "ofset")

Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.

```javascript
/*
"?", "size", "limit", "ofset"
*/

// api.example.com/products
// api.example.com/products?page=1
// api.example.com/products?limit=10&offset=0
// api.example.com/products?region=USA
// api.example.com/products?region=USA&brand=XYZ

```

```javascript
// === Query Params

app.get("/users", (req, res) => {
 const { limit, offset } = req.query;

 if(limit && offset) {
  res.json({
    limit,
    offset
  });
 } else {
  res.send("Sorry! Not exist params");
 }
});
```

> Todo lo que sea "específico", debe de ir antes de lo que es "dinámico".

```javascript

//app.get('/products/filter', (req, res) =>

//app.get('/products/:id', (req, res) => {};

```

### ¿Qué es el middleware?

> Se encarga de la gestión de los datos, los servicios de aplicaciones, la mensajería, la autenticación y la gestión de las API.
> Request >>> Middleware >>> Response
> Actúa como hilo conductor entre las aplicaciones, los datos y los usuarios.

- Funcionar como pipes ("tuberías. La salida de uno, es la entrada de otro").
- Validar datos.
- Capturar errores.
- Validar permisos.
- Controlar accesos.

El middleware es el software que brinda servicios y funciones comunes a las aplicaciones, además de lo que ofrece el sistema operativo. Generalmente, se encarga de la gestión de los datos, los servicios de aplicaciones, la mensajería, la autenticación y la gestión de las API.

Ayuda a los desarrolladores a diseñar aplicaciones con mayor eficiencia. Además, actúa como hilo conductor entre las aplicaciones, los datos y los usuarios.

En el caso de las empresas con entornos de contenedores y multicloud, el middleware puede rentabilizar el desarrollo y la ejecución de las aplicaciones según sea necesario.

[RedHat_middleware](https://www.redhat.com/es/topics/middleware/what-is-middleware)

> next() => Permite ejecutar e seguir al siguiente Middleware.

```javascript

function(req, res, next) {
 if(something) {
   res.send(`end`);
 } else {
  next();
 }

}

```

> error => Niddleware

```javascript

function(error, req, res, next) {
  if(error) {
    res.status(500).json({error}); 
  }else {
    next();
  }
}

```

```javascript

//*? ==> Middleware <== POST Api ===*/
app.use(express.json());

```

```javascript

// ==> Logear Errores

function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

// ==> Error con "Status"
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}


module.exports = { logErrors, errorHandler }

```

### CRUD (Method)

> POST ( API REST )

```javascript

//*? === > POST < ===*/
router.post(`/`, () => {
  const body = req.body;
  res.json({
    message: 'Created',
    data: body,
  });
});

```

> PATCH (API REST)

```javascript

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

```

> DELETE (API REST)

```javascript

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

```

> Status Code

```javascript

//*? === >> GET << ===  */

// ==> GET (String)
router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (id === `999`) {
    res.status(404).json({
      message: `Sorry! Not Found!`,
    }) else {
     res.status(200).json({
        id,
        name: 'Shoes soccer',
        price: 3500,
      });
    }
  }
});

// === Option Two ===
  if (id === `200`) {
    res.status(200).json({
      id,
      name: 'Shoes soccer',
      price: 3500,
    });
  }

  if (id === `400`) {
    res.status(400).json({
      message: `Bad Request`,
    });
  }

  if (id === `404`) {
    res.status(404).json({
      message: `Sorry! Not Found!`,
    });
  }

  if (id === `500`) {
    res.status(500).json({
      message: 'Internet Server Error!',
    });
  }

```

### Services (crea tu primer servicio)

> Percistencia en Memoria.

```javascript

const faker = require('faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;

```

```javascript

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

// === List 100 products ===

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const products = service.findOne(id);
  res.json(products);
});

// ===  http://localhost:3000/api/v1/products/{id}  ===
```

> Services (The Clean Architecture)

![](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202021-10-16%20143805-6c2c25c0-e4fd-4034-b55d-72cf21e3ff75.jpg)

> Async & Await (Services)

```javascript

async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    })
  }

  async findOne(id) {
    return this.products.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }


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
