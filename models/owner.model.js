const mongoose = require('mongoose');

const onwerSchema = new mongoose.Schema({
    fullname: String,

    email: String,

    password: String,

    contact: Number,

    gstin: Number,

    product: [],

    picture: String,

});

module.exports = mongoose.model('onwer', onwerSchema)