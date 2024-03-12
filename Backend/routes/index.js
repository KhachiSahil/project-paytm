const express = require('express');
const router = require('./user.js');
const route  = express.Router();

router.get('/user',router)

module.exports = route;