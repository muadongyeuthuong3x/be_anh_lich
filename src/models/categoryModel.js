const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categortyName : String,
},{
    timestamps : true
})


const categoryModel = mongoose.model("category",categorySchema)

module.exports = categoryModel