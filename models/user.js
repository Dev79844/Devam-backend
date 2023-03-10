const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please enter your email'],
    },
    password:{
        type: String,
        required: [true, 'Please enter the password']
    }
})

module.exports = mongoose.model('User', userSchema)