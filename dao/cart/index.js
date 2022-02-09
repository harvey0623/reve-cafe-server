const mmrmAxios = require('../../utility/axios/index.js');
const cartDao = {
   getCart() {
      return mmrmAxios({
         url: '/api/cart',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   addCart(payload) {
      return mmrmAxios({
         url: '/api/cart',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   removeCart(payload) {
      return mmrmAxios({
         url: `/api/cart/${payload}`,
         method: 'delete',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = cartDao;