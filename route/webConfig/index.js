const express = require('express');
const router = express.Router();
const webConfigDao = require('../../dao/webconfig/index.js')

router.get('/', async(req, res) => {
   let response = await webConfigDao.getConfig();
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;