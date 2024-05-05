const CartItem = require('../../models/CartItem');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

// Controller method to create a new item
exports.createItem = async (req, res) => {
    try {
        const { userId, itemName, quantity, price, totalPrice, serviceFee, sumTotal } = req.body;
        
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageUrl = result.secure_url;
        
        const newItem = new CartItem({ userId, itemName, quantity, price, totalPrice, imageUrl, serviceFee, sumTotal });
        await newItem.save();
        res.status(201).json({ message: 'Item created successfully', newItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


// Controller method to retrieve all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await CartItem.find();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller method to retrieve a single item by ID
exports.getItemById = async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await CartItem.findById(itemId);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller method to update an item by ID
exports.updateItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const { itemName, quantity, price, totalPrice, imageUrl, serviceFee, sumTotal } = req.body;
        const updatedItem = await CartItem.findByIdAndUpdate(itemId, { itemName, quantity, price, totalPrice, imageUrl, serviceFee, sumTotal }, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated successfully', updatedItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller method to delete an item by ID
exports.deleteItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const deletedItem = await CartItem.findByIdAndDelete(itemId);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully', deletedItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
