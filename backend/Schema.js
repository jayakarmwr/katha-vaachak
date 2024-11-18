const {ObjectId}=require("mongodb");
const mongoose=require('mongoose');
userSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
})
const User=mongoose.model('user',userSchema);
module.exports={User};