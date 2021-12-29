const express = require('express');
const router = express.Router();
const activityCartDao = require('../../dao/activity-cart/index.js');
const tempSave = require('../../utility/tempSave/index.js');


router.get('/product_promotions/bundle', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await activityCartDao.getCart(req.body);
   let statusCode = response.status === 1 ? 200 : 401;
   res.status(statusCode).json(response);
});

module.exports = router;