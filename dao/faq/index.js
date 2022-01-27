const mmrmAxios = require('../../utility/axios/index.js');
const faqDao = {
   get(payload) {
      return mmrmAxios({
         url: '/api/faq',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = faqDao;