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
   }
};

module.exports = thirdPartyAuthDao;