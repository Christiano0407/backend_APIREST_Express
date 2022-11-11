//** === === Backend APIREST ExpressJs === ===  */

const express = require(`express`);
//const { faker } = require(`@faker-js/faker`);
//const router = require(`./routes/productsRoute`);
const { routeProductApi } = require('./routes/index.js');
const app = express();
const port = process.env.port || 3000;

//*! ==> Call <== */
routeProductApi(app);
//*? === Routing === */
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/categories/:categoriesId', (req, res) => {
  const { categoriesId } = req.params;

  res.json({
    categoriesId,
  });
});

app.get('/categories/:categoriesId/products/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params;

  res.json({
    categoriesId,
    productsId,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('Sorry! Not exist params');
  }
});

//*? === Listen Port === */
app.listen(port, () => {
  console.log(`Server is running in Port http://localhost:${port}...`);
});
