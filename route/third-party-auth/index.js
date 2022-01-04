const express = require('express');
const router = express.Router();
const thirdPartyAuthDao = require('../../dao/third-party-auth/index.js');
const tempSave = require('../../utility/tempSave/index.js');

router.post('/login', async(req, res) => {
   let response = await thirdPartyAuthDao.login(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/logout', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await thirdPartyAuthDao.logout(req.body);
   let isSuccess = response.status === 1;
   let statusCode = isSuccess ? 200 : 400;
   if (isSuccess) tempSave.access_token = '';
   res.status(statusCode).json(response);
});

router.post('/me', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await thirdPartyAuthDao.me();
   let statusCode = response.status === 1 ? 200 : 401;
   res.status(statusCode).json(response);
});

router.post('/refresh', async(req, res) => {
   tempSave.access_token = req.headers.authorization;
   let response = await thirdPartyAuthDao.refresh();
   let statusCode = response.status === 1 ? 200 : 401;
   res.status(statusCode).json(response);
});

router.post('/register_check', async(req, res) => {
   let response = await thirdPartyAuthDao.register_check(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/register', async(req, res) => {
   let response = await thirdPartyAuthDao.register(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/register_verify', async(req, res) => {
   let response = await thirdPartyAuthDao.register_verify(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/resend_register_verify', async(req, res) => {
   let response = await thirdPartyAuthDao.resend_register_verify(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/forgot_password', async(req, res) => {
   let response = await thirdPartyAuthDao.forgot_password(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/resend_forget_verify', async(req, res) => {
   let response = await thirdPartyAuthDao.resend_forget_verify(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/forgot_password_verify', async(req, res) => {
   let response = await thirdPartyAuthDao.forgot_password_verify(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});

router.post('/reset_password', async(req, res) => {
   let response = await thirdPartyAuthDao.reset_password(req.body);
   let statusCode = response.status === 1 ? 200 : 400;
   res.status(statusCode).json(response);
});


module.exports = router;