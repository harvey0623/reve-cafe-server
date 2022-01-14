const mmrmAxios = require('../../utility/axios/index.js');
const productDao = {
   product(payload) {
      return mmrmAxios({
         url: '/api/product',
         method: 'get',
         pararms: payload
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
         data: {}
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
         data: {}
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
         data: {},
         params: query
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   }
};

module.exports = productDao;