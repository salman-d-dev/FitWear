const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email:{type:String, required: true},
    orderID: {type:String,  required: true},
    paymentInfo: {type:String, required:true, default:"Skipped"},
    products:{type:Object, required: true},
    address:{type:String, required: true},
    amount:{type:Number, required:true},
    status:{type:String, required:true, default: "Pending"},

}, {timestamps:true});


//correct overwrite model error
mongoose.models = {};

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;