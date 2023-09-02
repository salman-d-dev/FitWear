const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userID:{type:String, required: true},
    products:[{
        productID:{type:Number, required:true},
        quantity:{type:String, required:true},
    }],
    address:{type:String, required: true},
    amount:{type:Number, required:true},
    status:{type:String, required:true, default: "Pending"},

}, {timestamps:true});

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;