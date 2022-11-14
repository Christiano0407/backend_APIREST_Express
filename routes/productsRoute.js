//** === ==> Rout Products <== === */
const express = require(`express`);
const { faker } = require(`@faker-js/faker`);

const router = express.Router();

//*! === === ==> */
router.get('/', (req, res) => {
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

//*? === >> GET << ===  */
router.get('/:id', (req, res) => {
  const { id } = req.params;

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
});

//*? === > POST < === */
router.post(`/`, () => {
  const body = req.body;
  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

//*? === > PATCH < === */
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

//*? === > DELETE < === */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

//** === >> Export << ===  */
module.exports = router;
