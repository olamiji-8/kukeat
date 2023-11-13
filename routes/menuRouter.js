// routes/menuRoutes.js
const express = require('express');
const router = express.Router();

const path = require('path');
const menuData = require('../config/data');

// GET all menu items
router.get('/menu', (req, res) => {
  console.log('GET request for all menu items');
  res.json(menuData);
});

// GET a specific menu item by ID
router.get('/menu/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  console.log(`GET request for menu item with ID: ${itemId}`);
  const menuItem = menuData.find(item => item.id === itemId);

  if (menuItem) {
    res.json(menuItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Add more routes as needed

module.exports = router;
