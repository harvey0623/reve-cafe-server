const express = require('express');
const router = express.Router();
const faqDao = require('../../dao/faq/index.js');

router.get('/', async(req, res) => {
   let response = await faqDao.get();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;