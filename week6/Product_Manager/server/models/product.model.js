const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title required'],
        minLength: [2, 'Title must be at least 2 characters'],
        maxLength: 45},
    price: {
        type: Number,
        required: [true, 'Price required'],
        minLength: [2, 'Price must be at least 2 characters'],
        maxLength: 12},
    description: {
        type: String,
        required: [true, 'Description required'],
        minLength: [10, 'Description must be at least 10 characters'],
        maxLength: 100},
}, {timestamps:true})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;