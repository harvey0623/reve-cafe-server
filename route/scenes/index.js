const express = require('express');
const router = express.Router();
const scenesDao = require('../../dao/scenes/index.js');

router.get('/banner', async(req, res) => {
   let response = await scenesDao.banner();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/article/brand', async(req, res) => {
   let response = await scenesDao.brand();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;