"use strict";

var path = require('path');

var express = require('express');

var productController = require('../controllers/products');

var router = express.Router(); // /admin/add-product => GET

router.get('/add-product', productController.getAddProduct); // /admin/add-product => POST

router.post('/add-product', productController.postAddProduct);
module.exports = router;