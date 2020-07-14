"use strict";

var Product = require('../models/product');

exports.getProducts = function (req, res, next) {
  Product.fetchAll(function (products) {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All products',
      path: '/products'
    });
  });
};

exports.getIndex = function (req, res, next) {
  Product.fetchAll(function (products) {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = function (req, res, next) {
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  });
};