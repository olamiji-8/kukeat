// adminRoutes.js
const express = require('express');
const router = express.Router();
const cartItemController = require('../controller/cartItemController');





// Cart item management
router.get('/cart-items', cartItemController.getAllCartItems);
router.get('/cart-items/:cartItemId', cartItemController.getCartItem);
router.delete('/cart-items/:cartItemId', cartItemController.deleteCartItem);

module.exports = router;
