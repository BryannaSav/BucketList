var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:String,
    list:[{title:String, description:String, check:Boolean}]
},{timestamps:true});

mongoose.model('User',UserSchema);