const express = require('express');
const router = express.Router();
const activityDao = require('../../dao/activity/index.js');

router.get('/product_promotions/full_amount', async(req, res) => {
   let response = await activityDao.fullAmount();
   let statusCode = response.status === 1 ? 200 : 401;
   res.status(statusCode).json(response);
});

router.get('/product_promotions/red_with_green', async(req, res) => {
   let response = await activityDao.red_with_green();
   let statusCode = response.status === 1 ? 200 : 401;
   res.status(statusCode).json(response);
});

router.get('/product_promotions/full_amount_meta', async(req, res) => {
   let response = await activityDao.full_amount_meta(req.query);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/product_promotions/red_with_green_meta', async(req, res) => {
   let response = await activityDao.red_with_green_meta(req.query);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;