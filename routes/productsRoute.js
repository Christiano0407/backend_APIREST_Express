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
router.get('/', async (req, res) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: 'Bad Request',
    });
  }
});

//*? === >> GET << ===  */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await service.findOne(id);

    /* if (id === `200`) {
      res.status(200).json({
        message: 'Ok!',
      });
    } */

    /*  if (id === `400`) {
      res.status(400).json({
        message: `Bad Request`,
      });
    } */

    /*  if (id === `404`) {
      res.status(404).json({
        message: `Sorry! Not Found!`,
      });
    } */

    /* if (id === `500`) {
      res.status(500).json({
        message: 'Internet Server Error!',
      });
    } */

    res.json(products);
  } catch (error) {
    res.status(404).json({
      message: `Sorry, not found!`,
    });
  }
});

//*? === > POST < === */
router.post(`/`, async () => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//*? === > PATCH < === */
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//*? === > DELETE < === */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const productDelete = await service.delete(id);
  res.json(productDelete);
});

//** === >> Export << ===  */
module.exports = router;
