const express = require('express');
const router = express.Router();
const productDao = require('../../dao/product/index.js');

router.get('/product_recommend_meta', async(req, res) => {
   let response = await productDao.recommend_meta();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;