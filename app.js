//** === === === >> Server << === >> Backend API REST ExpressJs << === ===  */

const express = require(`express`);
//const { faker } = require(`@faker-js/faker`);
//const router = require(`./routes/productsRoute`);
const routeProductApi = require('./routes/index.js');
/* const { routeCategoriesApi } = require(`./routes/index.js`);
const { routerUserApi } = require(`./routes/index.js`);
 */
//*? === Call Middleware === */
const { logErrors, errorHandler } = require(`./middleware/errorHandler.js`);

//*? === APP & PORT === */
const app = express();
const port = process.env.port || 3000;

//*! ==> Call <== */
routeProductApi(app);
app.use(logErrors);
app.use(errorHandler);

//*? === Routing === */
app.get('/', (req, res) => {
  res.send('Hello World');
});

//*? === Listen Port === */
app.listen(port, () => {
  console.log(`Server is running in Port http://localhost:${port}...`);
});
