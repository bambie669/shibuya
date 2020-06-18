"use strict";var path=require("path"),express=require("express"),bodyParser=require("body-parser"),errorController=require("./controllers/error"),app=express();app.set("view engine","pug"),app.set("views","views");var adminRoutes=require("./routes/admin"),shopRoutes=require("./routes/shop");app.use(bodyParser.urlencoded({extended:!1})),app.use(express.static(path.join(__dirname,"public"))),app.use("/admin",adminRoutes),app.use(shopRoutes),app.use(errorController.get404),app.listen(3e3);