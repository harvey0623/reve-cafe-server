const mmrmAxios = require('../../utility/axios/index.js');
const thirdPartyApiDao = {
   getTerm(payload) {
      return mmrmAxios({
         url: '/api/term/doBriefTerm',
         method: 'post',
         data: { ...payload }
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = thirdPartyApiDao;