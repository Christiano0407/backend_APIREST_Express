//** === ==> Call Router <== === */
const router = require('./productsRoute.js');
// const routerUser = require(`./`);

//*! === Define Route Default === */
function routeProductApi(app) {
  app.use('/products', router);
}

module.exports = routeProductApi;
