const mongoose = require('mongoose');

//for address

const addressSchema = new mongoose.Schema({
    pincode: String,
    city: String,
    state: String,
    locality: String,
  });

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    address:addressSchema,
    phone:{type:String},
    isAdmin:{type:Boolean, default:false}
}, 
    {timestamps:true});


//correct overwrite model error
mongoose.models = {};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;