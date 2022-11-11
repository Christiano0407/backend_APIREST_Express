const express = require(`express`);
const { faker } = require(`@faker-js/faker`);

const routerCategories = express.Router();

routerCategories.get('/:categoriesId', (req, res) => {
  //const { categoriesId } = req.params;
  const department = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    department.push({
      name: faker.commerce.productName(),
      department: faker.commerce.department(),
    });
  }

  res.json(department);
  //categoriesId,
});

/* routerCategories.get('/:categoriesId/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params;

  res.json({
    categoriesId,
    productsId,
  });
}); */

//** === >>> Export <<< === */

module.exports = routerCategories;
