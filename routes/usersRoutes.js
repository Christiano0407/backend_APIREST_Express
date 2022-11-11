const express = require(`express`);
const { faker } = require(`@faker-js/faker`);
const routerUser = express.Router();

routerUser.get('/', (req, res) => {
  const userNew = [];
  const { size } = req.query;
  const limit = size || 15;

  for (let i = 0; i < limit; i++) {
    userNew.push({
      username: faker.fake('{{name.lastName}}'),
      userId: faker.datatype.uuid(),
      email: faker.internet.email(),
    });
  }

  res.json(userNew);
});

//** === >>> Export <<< === */
module.exports = routerUser;
