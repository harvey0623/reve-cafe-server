const mmrmAxios = require('../../utility/axios/index.js');
const orderDao = {
   pay() {
      return mmrmAxios({
         url: '/api/portal/order/pay',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   invoice() {
      return mmrmAxios({
         url: '/api/portal/order/invoice',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   ship() {
      return mmrmAxios({
         url: '/api/portal/order/shipment',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = orderDao;