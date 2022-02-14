const axios = require('axios');
const tempSave = require('../tempSave/index.js');
const mmrmAxios = axios.create({
   baseURL: process.env.BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'language': 'zh_TW',
      'app-id': process.env.APP_ID,
      'device-uuid': process.env.DEVICE_UUID
   },
});

mmrmAxios.interceptors.request.use(function (config) {
   config.headers.Authorization = tempSave.access_token;
   return config;
}, function (error) {
   return Promise.reject(error);
});

module.exports = mmrmAxios;