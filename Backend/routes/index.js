const express = require('express');
const router = require('./user.js');
const {accountRoute} = require('./account.js');
const route  = express.Router();

route.use('/user',router);
route.use('/account', accountRoute);

module.exports = route;