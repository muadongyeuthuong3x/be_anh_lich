const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    descripts: String
}, {
    timestamps: true
})


const contactModel = mongoose.model("contact", contactSchema)

module.exports = contactModel