const { Schema, model} = require('mongoose')

const ProductSchema = {
    name:{
        type: String,
        require: true
    },
    img:{
        type: Image,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    discount:{
        type: Number,
        require: true
    }
}