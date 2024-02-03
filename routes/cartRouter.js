const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController')


app.post('/cart', cartController.addItemToCart);


module.exports = router;