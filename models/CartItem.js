

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const cartItemSchema = new Schema({
//     itemName: String,
//     quantity: Number,
//     price: Number,
//     totalPrice: Number // Include total price for the item
// });

// module.exports = mongoose.model('CartItem', cartItemSchema);
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },

    items: [
        {
            itemName: String,
            quantity: Number,
            price: Number,
            totalPrice: Number,
            // imageUrl:String
        }
    ],
    serviceFee: Number,
    sumTotal: Number,
    createdAt: { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model('CartItem', cartItemSchema);


