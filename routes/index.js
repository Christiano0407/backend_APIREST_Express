//** === === === ==> Call & Assemble Routers <== === === === */

const router = require('./productsRoute.js');
const routerCategories = require(`./categoriesRoute.js`);
const routerUser = require(`./usersRoutes.js`);

//*! === Define Route Default === */
function routeProductApi(app) {
  app.use('/api/products', router);
}

function routeCategoriesApi(app) {
  app.use(`/api/categories`, routerCategories);
}

function routerUserApi(app) {
  app.use(`/api/users`, routerUser);
}

module.exports = { routeProductApi, routeCategoriesApi, routerUserApi };
