const express = require('express');
const router = express.Router();
const thirdPartyAuthDao = require('../../dao/third-party-auth/index.js');

router.post('/login', async(req, res) => {
   let response = await thirdPartyAuthDao.login(req.body);
   console.log(response)
   // console.log(response);
   // let statusCode = response.rcrm.RC === 'C01' ? 200 : 400;
   // res.status(statusCode).json({
   //    status: statusCode === 200,
   //    results: response.results,
   // })
});

module.exports = router;