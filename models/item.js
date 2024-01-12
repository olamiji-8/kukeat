// item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // ... other details related to the item
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
