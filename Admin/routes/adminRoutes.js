// adminRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/itemController');
const itemController = require('../controller/itemController');
const cartItemController = require('../../controller/checkoutController');


// // User management
// router.get('/users', userController.getAllUsers);
// router.post('/users', userController.createUser);
// router.get('/users/:userId', userController.getUser);
// router.put('/users/:userId', userController.updateUser);
// router.delete('/users/:userId', userController.deleteUser);

// // Item management
// router.get('/items', itemController.getAllItems);
// router.post('/items', itemController.createItem);
// router.get('/items/:itemId', itemController.getItem);
// router.put('/items/:itemId', itemController.updateItem);
// router.delete('/items/:itemId', itemController.deleteItem);

// Cart item management
router.get('/cart-items', cartItemController.getAllCartItems);
router.get('/cart-items/:cartItemId', cartItemController.getCartItem);

module.exports = router;
