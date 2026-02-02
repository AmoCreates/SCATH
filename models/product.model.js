const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    images: String,

    productname: String,

    price: Number,

    isAvailable: {
        type:Boolean,
        default:true
    },

    discout: {
        type: Number,
        default: 0
    },
    bgColor: String,
    panelColor: String
    
});

module.exports = mongoose.model('product', productSchema)