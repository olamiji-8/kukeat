// cartItemController.js
const CartItem = require('../../models/CartItem');


// Controller to retrieve all cart items
exports.getAllCartItems = async (req, res) => {
    try {
        // Log to verify that the function is being called
        console.log('getAllCartItems function called');

        // Fetch cart items from the database
        const cartItems = await CartItem.find()
            .populate('userId', 'fullname email phoneNumber address city state')
            .sort({ createdAt: -1 })
            .exec();

        // Check if cartItems are fetched
        console.log('Fetched cart items:', cartItems);

        // If no cart items found, respond accordingly
        if (!cartItems || cartItems.length === 0) {
            return res.status(404).json({ error: 'No cart items found' });
        }

        // Respond with fetched cart items
        res.json(cartItems);
    } catch (error) {
        // Log the error for debugging
        console.error('Error retrieving cart items:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
// Controller to retrieve a specific cart item

exports.getCartItem = async (req, res) => {
    const { cartItemId } = req.params;

    try {
        // Log to verify that the function is being called and cartItemId is received
        console.log('getCartItem function called with cartItemId:', cartItemId);

        // Fetch the specific cart item by ID
        const cartItem = await CartItem.findById(cartItemId)
            .populate('userId', 'fullname email phoneNumber address city state')
            .exec();

        // Check if the cart item is found
        if (!cartItem) {
            console.log('Cart item not found');
            return res.status(404).json({ error: 'Cart item not found' });
        }

        // Respond with the fetched cart item
        res.json(cartItem);
    } catch (error) {
        // Log the error for debugging
        console.error('Error retrieving cart item:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
