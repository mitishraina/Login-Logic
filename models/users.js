const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/login`)

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String 
})

const User = mongoose.model('User', userSchema)

module.exports = User