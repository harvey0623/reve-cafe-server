const express = require('express');
const router = express.Router();
const cartDao = require('../../dao/cart/index.js');
const tempSave = require('../../utility/tempSave/index.js');

router.get('/', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await cartDao.getCart(req.body);
   let statusCode = response.status === 1 ? 200 : 401;
   res.status(statusCode).json(response);
});

module.exports = router;