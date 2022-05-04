const mmrmAxios = require('../../utility/axios/index.js');
const webConfigDao = {
   getConfig() {
      return mmrmAxios({
         url: '/api/portal/config',
         method: 'get',
      }).then(res => {
         return res.data;
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = webConfigDao;