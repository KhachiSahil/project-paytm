const express = require('express');
const router = require('./user.js');
const {accountRoute} = require('./account.js');
const route  = express.Router();

router.use('/user',router);
router.use('/account', accountRoute);

module.exports = route;