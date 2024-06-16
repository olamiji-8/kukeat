// cartItemController.js
const CartItem = require('../../models/CartItem');

exports.getAllCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.find().maxTimeMS(90000).populate('user').populate('items.item');
        res.json(cartItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getCartItem = async (req, res) => {
    const { cartItemId } = req.params;
    try {
        const cartItem = await CartItem.findById(cartItemId).maxTimeMS(90000).populate('user').populate('items.item');
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }
        res.json(cartItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
