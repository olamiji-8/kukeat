// order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
        },
        // ... other item details you want to store in the order
    }],
    // ... other order-related information you want to store
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
