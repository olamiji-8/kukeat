// routes/menuRoutes.js
const express = require('express');
const router = express.Router();

const path = require('path');
const menuData = require('../config/data');
const storeData= require("../config/data1");

// GET all menu items
router.get('/menu', (req, res) => {
  console.log('GET request for all menu items');
  res.json(menuData);
});

// GET menu items by category
router.get('/menu/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase(); // Get the category from the URL
  console.log(`GET request for menu items in category: ${category}`);
  
  // Filter menu items based on the category
  const itemsInCategory = menuData.filter(item => item.category.toLowerCase() === category);
  
  if (itemsInCategory.length > 0) {
    res.json(itemsInCategory);
  } else {
    res.status(404).json({ error: 'No items found in this category' });
  }
});



// GET a specific menu item by category and ID
router.get('/menu/category/:categoryName/:id', (req, res) => {
  const categoryName = req.params.categoryName.toLowerCase();
  const itemId = parseInt(req.params.id);
  console.log(`GET request for menu item in category "${categoryName}" with ID: ${itemId}`);
  
  // Find the menu item by category and ID
  const menuItem = menuData.find(item => item.category.toLowerCase() === categoryName && item.id === itemId);

  if (menuItem) {
    res.json(menuItem);
  } else {
    res.status(404).json({ error: 'Item not found in this category' });
  }
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


// GET all categories with associated images
router.get('/categories', (req, res) => {
  const categoriesMap = new Map();

  // Group menu items by category
  menuData.forEach(item => {
    if (!categoriesMap.has(item.category)) {
      categoriesMap.set(item.category, []);
    }
    categoriesMap.get(item.category).push({
      id: item.id,
      image: item.image
    });
  });

  // Format categories with their associated images
  const categoriesWithImages = [];
  categoriesMap.forEach((images, category) => {
    categoriesWithImages.push({
      category,
      images
    });
  });

  if (categoriesWithImages.length > 0) {
    res.json(categoriesWithImages);
  } else {
    res.status(404).json({ error: 'No categories found' });
  }
});

module.exports = router;




// Add more routes as needed
router.get("/store", (req,res)=>{
  console.log('GET request for all store items');
  res.json(storeData)
})

// GET a specific store item by ID
router.get('/store/:id', (req, res) => {
  const storeId = parseInt(req.params.id);
  console.log(`GET request for store item with ID: ${storeId}`);
  const storeItem = storeData.find(item => item.id === storeId);

  if (storeItem) {
    res.json(storeItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});
module.exports = router;
