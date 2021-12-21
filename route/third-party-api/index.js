const express = require('express');
const router = express.Router();
const thirdPartyApiDao = require('../../dao/third-party-api/index.js');

router.post('/term/doBriefTerm', async(req, res) => {
   let response = await thirdPartyApiDao.getTerm(req.body);
   let statusCode = response.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json({
      status: statusCode === 200,
      results: response.results,
   })
});

module.exports = router;