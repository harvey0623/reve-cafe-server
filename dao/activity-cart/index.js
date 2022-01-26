const mmrmAxios = require('../../utility/axios/index.js');
const activityCartDao = {
   getCart() {
      return mmrmAxios({
         url: '/api/activity_cart/product_promotions/bundle',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   addCart(payload) {
      return mmrmAxios({
         url: '/api/activity_cart/product_promotions/bundle',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = activityCartDao;