var mongoose = require("mongoose");
var User = mongoose.model("User");
module.exports={
    login:function(req,res){
        User.findOne({name:req.body.name}, function(err, user){
            if(user==null){
                User.create({name:req.body.name}, function(err, newuser){
                    req.session.curusername=newuser.name;
                    req.session.save();
                })
            }
            else{
                req.session.curusername=user.name;
                req.session.save()
            }
            return res.json("success");
        })
    },

    checklogin:function(req,res){
        if(req.session.curusername===undefined){
            return res.json(false);
        }
        else{
            return res.json(true);
        }
    },

    logout:function(req,res){
        req.session.destroy();
        return res.redirect("/")
    },

    getdb:function(req,res){
        let results={}
        User.find({}, function(err, users){
            results.users=users;
            User.findOne({name:req.session.curusername}, function(err, curuser){
                results.curuser=curuser;
                return res.json(results);
            })
        })
    },

    create_item(req,res){
        User.update({name:req.session.curusername}, {$push: {list: req.body}}, function(err, item){
            return res.json()
        })
    },
    
    getUser(req,res){
        User.findOne({name:req.body.name}, function(err, user){
            return res.json(user)
        })
    }

}