const express = require('express');
const router = express.Router();
const memberDao = require('../../dao/member/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');
const { checkHasToken } = require('../../middleware/index.js');

router.post('/login', async (req, res) => {
   let response = await memberDao.login(req.body);
   let { status, statusCode } = checkResponse(response);
   if (status) {
      let limitTime = 3 * 24 * 60 * 60 * 1000;
      res.cookie('mmrmToken', response.results.member_access_token, {
         sameSite: 'Lax',
         expires: new Date(Date.now() + limitTime),
         signed: true
      });
   }
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/logout', checkHasToken, async (req, res) => {
   let token = req.signedCookies.mmrmToken;
   let response = await memberDao.logout(token);
   let { status, statusCode } = checkResponse(response);
   res.clearCookie('mmrmToken');
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/register_check', async (req, res) => { //註冊第一步驟
   let response = await memberDao.register_check(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/register', async (req, res) => { //註冊第二步驟
   let response = await memberDao.register(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/register_verify', async (req, res) => { //註冊第三步驟
   let response = await memberDao.register_verify(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/v1.1/forget_password', async (req, res) => { //忘記密碼第
   let response = await memberDao.forget_password(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/forget_password_verify', async (req, res) => { //忘記密碼-手機驗證
   let response = await memberDao.forget_password_verify(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/reset_password', async (req, res) => { //重設密碼
   let response = await memberDao.reset_password(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/verify_member_password', checkHasToken, async (req, res) => { //驗正密碼
   let token = req.signedCookies.mmrmToken;
   let response = await memberDao.verify_member_password({
      token,
      password: req.body.password
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/get_member_profile', checkHasToken, async (req, res) => { //取得會員資料
   let token = req.signedCookies.mmrmToken;
   let response = await memberDao.get_member_profile(token)
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/update_member_profile', checkHasToken, async (req, res) => { //更新會員資料
   let response = await memberDao.update_member_profile({ 
      token: req.signedCookies.mmrmToken,
      member_profile: req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/update_member_mobile', checkHasToken, async (req, res) => { //更新會員手機
   let response = await memberDao.update_member_mobile({ 
      token: req.signedCookies.mmrmToken,
      mobile: req.body.mobile,
      password: req.body.password
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/member_verify', checkHasToken, async (req, res) => { //會員認證(修改手機號碼用)
   let response = await memberDao.member_verify({ 
      token: req.signedCookies.mmrmToken,
      verify_code: req.body.verify_code,
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/update_member_password', checkHasToken, async (req, res) => { //更新密碼
   let response = await memberDao.update_member_password({ 
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/member_summary', checkHasToken, async (req, res) => { //會員快取資料
   let token = req.signedCookies.mmrmToken;
   let response = await memberDao.member_summary(token);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/get_member_card', checkHasToken, async (req, res) => { //會員條碼
   let token = req.signedCookies.mmrmToken;
   let response = await memberDao.get_member_card(token);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;