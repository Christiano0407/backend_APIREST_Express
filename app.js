//** === === Backend APIREST ExpressJs === ===  */

const express = require(`express`);
const { faker } = require(`@faker-js/faker`);
const app = express();
const port = process.env.port || 3000;
//*? === Routing === */
app.get('/', (req, res) => {
  res.send('Hello World');
});
//*! ==> */
app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Shoes soccer',
    price: 3500,
  });
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
