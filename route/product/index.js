const express = require('express');
const router = express.Router();
const productDao = require('../../dao/product/index.js');

router.get('/', async(req, res) => {
   let response = await productDao.product(req.query);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/product_recommend_meta', async(req, res) => {
   let response = await productDao.recommend_meta();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/product_detail/:productCode', async(req, res) => {
   let response = await productDao.product_detail(req.params.productCode);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/product_category', async(req, res) => {
   let response = await productDao.product_category(req.query);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/product_temperature', async(req, res) => {
   let response = await productDao.product_temperature();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;