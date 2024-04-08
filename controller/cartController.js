exports.addItemToCart = async (req, res) => {
    try {
        const { itemName, quantity, price, totalPrice, sumTotal, serviceFee } = req.body;

        // Create a new cart item
        const newItem = new CartItem({
            items: [
                {
                    itemName,
                    quantity,
                    price,
                    totalPrice
                }
            ],
            serviceFee,
            sumTotal
        });

        // Save the item to the database
        await newItem.save();

        res.status(201).json({ message: 'Item added to cart successfully', newItem });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};