const mmrmAxios = require('../../utility/axios/index.js');
const productDao = {
   product(payload) {
      return mmrmAxios({
         url: '/api/product',
         method: 'get',
         params: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   recommend_meta() {
      return mmrmAxios({
         url: '/api/product_recommend_meta',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   product_detail(productCode) {
      return mmrmAxios({
         url: `/api/product_detail/${productCode}`,
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   product_category(query) {
      return mmrmAxios({
         url: '/api/product_category',
         method: 'get',
         params: query
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   product_temperature() {
      return mmrmAxios({
         url: '/api/product_temperature',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   }
};

module.exports = productDao;