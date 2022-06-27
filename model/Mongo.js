const { Schema, model} = require('mongoose')

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    img:{
        data: Buffer,
        contentType: String,
    },
    price: {
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        required: true
    },
    star: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    catalog:{
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    }
})

module.exports = model('product', productSchema)