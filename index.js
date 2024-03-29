const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3030;
const dotenv = require('dotenv').config({
   path: '.env.dev'
});

const thirdPartyAuth = require('./route/third-party-auth/index.js');
const thirdPartyApi = require('./route/third-party-api/index.js');
const cart = require('./route/cart/index.js');
const activity_cart = require('./route/activity-cart/index.js');
const scenes = require('./route/scenes/index.js');
const product = require('./route/product/index.js');
const activity = require('./route/activity/index.js');
const customer = require('./route/customer-service/index.js');
const faq = require('./route/faq/index.js');
const third_party_member = require('./route/third_party_member/index.js');
const order = require('./route/order/index.js');
const webConfig = require('./route/webConfig/index.js');

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors({}));

app.use('/third_party_auth', thirdPartyAuth);
app.use('/third_party_api', thirdPartyApi);
app.use('/cart', cart);
app.use('/activity_cart', activity_cart);
app.use('/scenes', scenes);
app.use('/product', product);
app.use('/activity', activity);
app.use('/customer', customer);
app.use('/faq', faq);
app.use('/third_party_member', third_party_member);
app.use('/order', order);
app.use('/webConfig', webConfig);

app.use((req, res) => {
   res.write('<h1>Hello revecafe server ~</h1>');
   res.end();
});