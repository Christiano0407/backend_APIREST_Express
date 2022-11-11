//** === ==> Call Router <== === */
const router = require('./productsRoute.js');
const routerCategories = require(`./categoriesRoute.js`);
const routerUser = require(`./usersRoutes.js`);

//*! === Define Route Default === */
function routeProductApi(app) {
  app.use('/products', router);
}

function routeCategoriesApi(app) {
  app.use(`/categories`, routerCategories);
}

function routerUserApi(app) {
  app.use(`/users`, routerUser);
}

module.exports = { routeProductApi, routeCategoriesApi, routerUserApi };
