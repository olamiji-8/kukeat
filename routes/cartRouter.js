const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController')


router.post('/', cartController.addItemToCart);


module.exports = router;