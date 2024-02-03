const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController')


router.post('/cart', cartController.addItemToCart);


module.exports = router;