const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    address:{type:String},
    phone:{type:String},
}, 
    {timestamps:true});


//correct overwrite model error
mongoose.models = {};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;