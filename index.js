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

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors({}));

app.use('/third_party_auth', thirdPartyAuth);
app.use('/third_party_api', thirdPartyApi);

app.use((req, res) => {
   res.write('<h1>Hello mmrm server ~</h1>');
   res.end();
});