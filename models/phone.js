const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    id: {type:String},
    secure_url: {type:String}
})

const phoneSchema = new mongoose.Schema({
    name: String,
    model: String,
    condition: String,
    warranty: String,
    accessories: String,
    battery: String,
    category: String,
    images: [photoSchema]
}, {timestamps: true})

const Phone = mongoose.model('Phone', phoneSchema)

module.exports = Phone