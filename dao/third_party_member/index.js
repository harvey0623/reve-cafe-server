const mmrmAxios = require('../../utility/axios/index.js');
const thirdPartyMemberDao = {
   getProfile() {
      return mmrmAxios({
         url: '/api/third_party_member/profile',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   updateProfile(payload) {
      return mmrmAxios({
         url: '/api/third_party_member/profile',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   summary() {
      return mmrmAxios({
         url: '/api/third_party_member/summary',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   level(payload) {
      return mmrmAxios({
         url: '/api/third_party_member/level_information',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = thirdPartyMemberDao;