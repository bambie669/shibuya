"use strict";

var path = require('path');

var express = require('express');

var productsConroller = require('../controllers/products');

var router = express.Router();
router.get('/', productsConroller.getAddProducts);
module.exports = router;