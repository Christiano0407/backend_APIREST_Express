const express = require(`express`);

const routerUser = express.Router();

routerUser.get('/', (req, res) => {
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

//** === >>> Export <<< === */
module.exports = routerUser;
