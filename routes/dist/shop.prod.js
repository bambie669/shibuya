"use strict";var path=require("path"),express=require("express"),productsController=require("../controllers/shop"),router=express.Router();router.get("/",shopController.getIndex),router.get("/products",shopController.getProducts),router.get("/cart"),router.get("/checkout"),module.exports=router;