const express = require('express');
const router = express.Router();
const orderDao = require('../../dao/order/index.js');
const tempSave = require('../../utility/tempSave/index.js');

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

router.get('/shipment_outbound', async(req, res) => {
   let response = await orderDao.outbound();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/createOrder', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await orderDao.createOrder(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/order_detail', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await orderDao.order_detail(req.query.vOrderNum);
   res.json(response);
});

router.get('/order_history', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await orderDao.order_history(req.query);
   res.json(response);
});


module.exports = router;
