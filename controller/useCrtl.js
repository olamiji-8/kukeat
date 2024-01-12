// checkoutController.js
const User = require('./models/checkoutModel');
const Order = require('./models/order');
const Item = require('./models/item'); // Import the Item model

const checkout = async (req, res) => {
    try {
        const { email, fullname, phoneNumber, address, city, state, cartItems } = req.body;

        // Create a new user record in the database
        const newUser = new User({
            email,
            fullname,
            phoneNumber,
            address,
            city,
            state,
        });
        const user = await newUser.save();

        // Create an order object that includes user ID
        const order = new Order({
            userId: user._id,
            // ... other order-related information you want to store
        });

        // Save the order record to your database
        await order.save();

        // Loop through cartItems and associate them with the order
        for (const cartItem of cartItems) {
            const { itemId, quantity } = cartItem;

            // Find the item in the Item model
            const item = await Item.findById(itemId);
            
            if (item) {
                // Assuming each item has a price, calculate the subtotal for the item
                const subtotal = item.price * quantity;

                // Create an item object associated with the order
                const orderItem = new Item({
                    orderId: order._id,
                    itemId,
                    quantity,
                    subtotal,
                    // ... other relevant item details you want to store
                });

                // Save the item record to your database
                await orderItem.save();
            } else {
                // Handle cases where the item is not found
            }
        }

        res.status(200).json({ message: 'Order placed successfully!', orderId: order._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = checkout;
