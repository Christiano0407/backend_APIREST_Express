const express = require(`express`);
//const { faker } = require(`@faker-js/faker`);

const routerCategories = express.Router();

routerCategories.get('/:categoriesId', (req, res) => {
  const { categoriesId } = req.params;

  res.json({
    categoriesId,
  });
});

routerCategories.get('/:categoriesId/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params;

  res.json({
    categoriesId,
    productsId,
  });
});

//** === >>> Export <<< === */

module.exports = routerCategories;
