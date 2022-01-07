const mmrmAxios = require('../../utility/axios/index.js');
const productDao = {
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
};

module.exports = productDao;