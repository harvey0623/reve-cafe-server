const express = require('express');
const router = express.Router();
const customerDao = require('../../dao/customer-service/index.js');

router.post('/contact', async(req, res) => {
   let response = await customerDao.contact(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;