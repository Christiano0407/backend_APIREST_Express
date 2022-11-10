//** === === Backend APIREST ExpressJs === ===  */

const express = require(`express`);
const app = express();
const port = process.env.port || 3000;
//*? === Routing === */
app.get('/', (req, res) => {
  res.send('Hello World');
});

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

//*? === Listen Port === */
app.listen(port, () => {
  console.log(`Server is running in Port http://localhost:${port}...`);
});
