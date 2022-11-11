//** === === === >> Server << === >> Backend APIREST ExpressJs << === ===  */

const express = require(`express`);
//const { faker } = require(`@faker-js/faker`);
//const router = require(`./routes/productsRoute`);
const {
  routeProductApi,
  routeCategoriesApi,
  routerUserApi,
} = require('./routes/index.js');
/* const { routeCategoriesApi } = require(`./routes/index.js`);
const { routerUserApi } = require(`./routes/index.js`);
 */
const app = express();
const port = process.env.port || 3000;

//*! ==> Call <== */
routeProductApi(app);
routeCategoriesApi(app);
routerUserApi(app);

//*? === Routing === */
app.get('/', (req, res) => {
  res.send('Hello World');
});

//*? === Listen Port === */
app.listen(port, () => {
  console.log(`Server is running in Port http://localhost:${port}...`);
});
