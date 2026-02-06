const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,

    email: String,

    password: String,

    contact: Number,

    picture: String,

    cart: [],
    
    orders: []
});

module.exports = mongoose.model('user', userSchema)