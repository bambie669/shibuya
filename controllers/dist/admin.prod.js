"use strict";var Product=require("../models/product");exports.getAddProduct=function(d,t,r){t.render("admin/add-product",{pageTitle:"Add Product",path:"/admin/add-product",formsCSS:!0,productCSS:!0,activeAddProduct:!0})},exports.postAddProduct=function(d,t,r){new Product(d.body.title).save(),t.redirect("/")};