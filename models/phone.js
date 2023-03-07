const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({
    name: String,
    model: String,
    condition: String,
    warranty: Date,
    accessories: String,
    battery: String,
    category: String
}, {timestamps: true})

const Phone = mongoose.model('Phone', phoneSchema)

module.exports = Phone