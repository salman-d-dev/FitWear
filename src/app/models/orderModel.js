const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email:{type:String, required: true},
    orderID: {type:String,  required: true},
    paymentInfo: {type:String, required:true, default:"skipped"},
    products:{type:Object, required: true},
    address:{type:String, required: true},
    amount:{type:Number, required:true},
    status:{type:String, required:true, default: "pending"},
    deliveryStatus:{type:String, required:true, default: "unshipped"},
    img:{type:String, required:true, default: "https://browntape.com/wp-content/uploads/2017/09/aa.png"},


}, {timestamps:true});


//correct overwrite model error
mongoose.models = {};

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;