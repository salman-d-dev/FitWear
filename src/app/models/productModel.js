const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type:String, required: true},
    slug:{type:String, required: true, unique: true},
    description:{type:String, required: true},
    img:{type:String, required:true, default:"https://www.productplan.com/uploads/2018/08/product-development.png"},
    category:{type:String, required:true, default: "Pending"},
    size:{type:String},
    color:{type:String},
    price:{type:Number, required:true},
    availableQty:{type:Number, required:true},

}, {timestamps:true});

//correct overwrite model error
mongoose.models = {};

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;