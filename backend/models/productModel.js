const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            unique: true,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String,
            require: true
        },
        countInStock: {
            type: Number,
            require: true
        },
        catogery: {
            type: String,
            require: true
        }
    }
);
const Product = mongoose.model('product', productSchema)
module.exports = Product