const axios = require('axios');
const mmrmAxios = axios.create({
   baseURL: process.env.BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'language': 'zh_TW',
      'app-id': process.env.APP_ID,
      'device-uuid': process.env.DEVICE_UUID
   },
});

module.exports = mmrmAxios;