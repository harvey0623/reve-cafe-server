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
   outbound() {
      return mmrmAxios({
         url: '/api/portal/order/shipment_outbound',
         method: 'get',
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   createOrder(payload) {
      return mmrmAxios({
         url: '/api/order',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
   order_detail(orderNumber) {
      return mmrmAxios({
         url: '/api/order_detail',
         method: 'get',
         params: { vOrderNum: orderNumber }
      }).then(res => {
         return res.data; 
      }).catch(err => {
         return err.response.data;
      })
   },
};

module.exports = orderDao;