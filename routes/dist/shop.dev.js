"use strict";

var path = require('path');

var express = require('express');

var productsController = require('../controllers/shop');

var router = express.Router();
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart');
router.get('/checkout');
module.exports = router;