// adminRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');
const cartItemController = require('../controller/cartItemController');



// // Item management
// router.get('/items', itemController.getAllItems);
// router.post('/items', itemController.createItem);
// router.get('/items/:itemId', itemController.getItem);
// router.put('/items/:itemId', itemController.updateItem);
// router.delete('/items/:itemId', itemController.deleteItem);

// Cart item management
router.get('/cart-items', cartItemController.getAllCartItems);
router.get('/cart-items/:cartItemId', cartItemController.getCartItem);
router.delete('/cart-items/:cartItemId', cartItemController.deleteCartItem);

module.exports = router;
