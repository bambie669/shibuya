"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var users = [];
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.get('/', function (req, res, next) {
  res.render('index', {
    pageTitle: 'Add User'
  });
});
app.get('/users', function (req, res, next) {
  res.render('users', {
    pageTitle: 'User',
    users: users
  });
});
app.post('/add-user', function (req, res, next) {
  users.push({
    name: req.body.username
  });
  res.redirect('/users');
});
app.listen(4000);