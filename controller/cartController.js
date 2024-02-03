

const CartItem = require('../models/CartItem');

// Controller to handle adding items to the cart
exports.addItemToCart = async (req, res) => {
    try {
        const { itemName, quantity, price } = req.body;

        // Calculate total price for the item
        const totalPrice = quantity * price;

        // Create a new cart item
        const newItem = new CartItem({
            itemName,
            quantity,
            price,
            totalPrice
        });

        // Save the item to the database
        await newItem.save();

        res.status(201).json({ message: 'Item added to cart successfully', newItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
