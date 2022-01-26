const mmrmAxios = require('../../utility/axios/index.js');
const customerDao = {
   contact(payload) {
      return mmrmAxios({
         url: '/api/customer_service',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = customerDao;