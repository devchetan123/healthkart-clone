const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    
        title : {type : String},
        discount: {type : Number},
        discountedPrice : {type : Number},
        originalPrice : {type : Number},
        rating:  {type : Number},
        Benefits : {type : Array},
        productDetails : {type : String},
         containsWeight : {type : Array},
        containsCal : {type : Array},
        img_url: {type : String},
        premiumPrice : {type : Number},
        section : {type : String},

      
}, { versionKey : false })

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;