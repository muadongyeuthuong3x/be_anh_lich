const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
   url_image: [String] ,
   default: []
}, {
    timestamps: true
});

const productModel = mongoose.model("slider", sliderSchema);

module.exports = productModel; 
