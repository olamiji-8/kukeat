const CartItem = require('../models/CartItem');

// Controller to handle adding items to the cart
exports.addItemToCart = async (req, res) => {
    try {
        const { itemName, quantity, price, totalPrice, sumTotal, serviceFee } = req.body;

        // Create a new cart item
        const newItem = new CartItem({
            items: [{
                itemName,
                quantity,
                price,
                totalPrice
            }],
            serviceFee // Save the service fee along with the cart item
        });

        // Save the item to the database
        await newItem.save();

        // Respond with success message
        res.status(201).json({ 
            message: 'Item added to cart successfully', 
            newItem
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
