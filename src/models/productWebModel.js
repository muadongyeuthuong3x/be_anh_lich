const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : String,
    brandName : String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
    imageView : String,
    productImage : [],
    description : String,
    price : Number,
    sellingPrice : Number,
    isActive : Boolean,
},{
    timestamps : true
})


const productModel = mongoose.model("product",productSchema)

module.exports = productModel