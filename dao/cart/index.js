const mmrmAxios = require('../../utility/axios/index.js');
const cartDao = {
   getCart() {
      return mmrmAxios({
         url: '/api/cart',
         method: 'get',
         data: {}
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = cartDao;