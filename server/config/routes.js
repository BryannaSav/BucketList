var users = require("./../controllers/users.js");
var path=require("path");

module.exports=function(app){
    app.post("/login", function(req,res){
        users.login(req,res)
    });
    app.get("/checklogin", function(req,res){
        users.checklogin(req,res);
    });
    app.get("/logout", function(req,res){
        users.logout(req,res);
    });
    app.get("/getdb", function(req,res){
        users.getdb(req,res);
    });
    app.post("/item/create", function(req,res){
        users.create_item(req,res);
    });
    app.post("/get/user", function(req,res){
        users.getUser(req,res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}