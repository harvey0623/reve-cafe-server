const mmrmAxios = require('../../utility/axios/index.js');
const scenesDao = {
   banner() {
      return mmrmAxios({
         url: '/api/scenes/home/banner',
         method: 'get',
         data: {}
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = scenesDao;