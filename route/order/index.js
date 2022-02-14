const express = require('express');
const router = express.Router();
const orderDao = require('../../dao/order/index.js');

router.get('/pay', async(req, res) => {
   let response = await orderDao.pay();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/invoice', async(req, res) => {
   let response = await orderDao.invoice();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/shipment', async(req, res) => {
   let response = await orderDao.ship();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});


module.exports = router;
