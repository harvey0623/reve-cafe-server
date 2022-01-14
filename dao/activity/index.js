const mmrmAxios = require('../../utility/axios/index.js');
const activityDao = {
   fullAmount() {
      return mmrmAxios({
         url: '/api/activity/product_promotions/full_amount',
         method: 'get',
         data: {}
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   red_with_green() {
      return mmrmAxios({
         url: '/api/activity/product_promotions/red_with_green',
         method: 'get',
         data: {}
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = activityDao;