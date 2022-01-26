const mmrmAxios = require('../../utility/axios/index.js');
const scenesDao = {
   banner() {
      return mmrmAxios({
         url: '/api/scenes/home/banner',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   brand() {
      return mmrmAxios({
         url: '/api/scenes/article/brand',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = scenesDao;