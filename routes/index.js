//** === === === ==> Call & Assemble Routers <== === === === */
const express = require(`express`);
const routerProduction = require('./productsRoute.js');
const routerCategories = require(`./categoriesRoute.js`);
const routerUser = require(`./usersRoutes.js`);

//*! === Define Route Default === */
function routeProductApi(app) {
  const router = express.Router();
  app.use(`/api/v1`, router);
  router.use('/products', routerProduction);
  router.use(`/categories`, routerCategories);
  router.use(`/users`, routerUser);
}

module.exports = routeProductApi;
