//** === ==> Rout Products <== === */
const express = require(`express`);
//const { faker } = require(`@faker-js/faker`);
//*!=== Services */
const ProductServices = require(`../services/productsService.js`);
const { product } = require('prelude-ls');
//*!=== Router & Services === */
const router = express.Router();
const service = new ProductServices();

//*! === === ==> */
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

//*? === >> GET << ===  */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const products = service.findOne(id);

  if (id === `200`) {
    res.status(200).json({
      message: 'Ok!',
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

  res.json(products);
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
