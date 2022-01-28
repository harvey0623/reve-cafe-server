const express = require('express');
const router = express.Router();
const thirdPartyMemberDao = require('../../dao/third_party_member/index.js');
const tempSave = require('../../utility/tempSave/index.js');

router.get('/profile', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await thirdPartyMemberDao.getProfile();
   let statusCode = response.status === 0 ? 401 : response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/profile', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await thirdPartyMemberDao.updateProfile(req.body);
   let statusCode = response.status === 0 ? 401 : response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.get('/summary', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await thirdPartyMemberDao.summary();
   let statusCode = response.status === 0 ? 401 : response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/level_information', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await thirdPartyMemberDao.level(req.body);
   let statusCode = response.status === 0 ? 401 : response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

module.exports = router;