// models/cartItem.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    itemName: String,
    quantity: Number,
    price: Number,
    totalPrice: Number // Include total price for the item
});

module.exports = mongoose.model('CartItem', cartItemSchema);