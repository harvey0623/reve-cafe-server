const mmrmAxios = require('../../utility/axios/index.js');
const thirdPartyAuthDao = {
   login(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/login',
         method: 'post',
         data: { ...payload }
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   logout() {
      return mmrmAxios({
         url: '/api/third_party_auth/logout',
         method: 'post',
         data: {}
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   me() { //登入狀態驗證
      return mmrmAxios({
         url: '/api/third_party_auth/me',
         method: 'post',
         data: {}
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return { status: 0 };
      });
   },
   refresh() { //刷新jwt token
      return mmrmAxios({
         url: '/api/third_party_auth/refresh',
         method: 'post',
         data: {}
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   register_check(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/register_check',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   register(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/register',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   register_verify(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/register_verify',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   resend_register_verify(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/resend_register_verify',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   forgot_password(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/forgot_password',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   resend_forget_verify(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/resend_forget_verify',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   forgot_password_verify(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/forgot_password_verify',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
   reset_password(payload) {
      return mmrmAxios({
         url: '/api/third_party_auth/reset_password',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      });
   },
};

module.exports = thirdPartyAuthDao;