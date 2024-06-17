const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const menuDataPath = path.join(__dirname, '../config/data.json');
const storeDataPath = path.join(__dirname, '../config/data1.json');

let menuData = require('../config/data.json');
let storeData = require("../config/data1.json");
const categoriesData = require("../config/categories");
const blogData = require("../config/blog");

// Utility function to write data to a file
function writeDataToFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Reload data from file
function reloadData(filePath) {
  delete require.cache[require.resolve(filePath)];
  return require(filePath);
}

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

// CREATE a new menu item
router.post('/menu', (req, res) => {
  const newItem = req.body;
  newItem.id = menuData.length ? Math.max(...menuData.map(item => item.id)) + 1 : 1; // Generate new ID
  menuData.push(newItem);
  writeDataToFile(menuDataPath, menuData);
  menuData = reloadData(menuDataPath);
  res.status(201).json(newItem);
});

// UPDATE a menu item
router.put('/menu/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = menuData.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) {
    const updatedItem = { ...menuData[itemIndex], ...req.body };
    menuData[itemIndex] = updatedItem;
    writeDataToFile(menuDataPath, menuData);
    menuData = reloadData(menuDataPath);
    res.json(updatedItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// DELETE a menu item
router.delete('/menu/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = menuData.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) {
    menuData.splice(itemIndex, 1);
    writeDataToFile(menuDataPath, menuData);
    menuData = reloadData(menuDataPath);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Similar CRUD operations for store items

// GET all store items
router.get('/store', (req, res) => {
  console.log('GET request for all store items');
  res.json(storeData);
});

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

// CREATE a new store item
router.post('/store', (req, res) => {
  const newItem = req.body;
  newItem.id = storeData.length ? Math.max(...storeData.map(item => item.id)) + 1 : 1; // Generate new ID
  storeData.push(newItem);
  writeDataToFile(storeDataPath, storeData);
  storeData = reloadData(storeDataPath);
  res.status(201).json(newItem);
});

// UPDATE a store item
router.put('/store/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = storeData.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) {
    const updatedItem = { ...storeData[itemIndex], ...req.body };
    storeData[itemIndex] = updatedItem;
    writeDataToFile(storeDataPath, storeData);
    storeData = reloadData(storeDataPath);
    res.json(updatedItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// DELETE a store item
router.delete('/store/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = storeData.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) {
    storeData.splice(itemIndex, 1);
    writeDataToFile(storeDataPath, storeData);
    storeData = reloadData(storeDataPath);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Order Categories routes 
router.get("/order", (req,res)=>{
  console.log('GET request for all order items');
  res.json(categoriesData)
})

// GET a specific store item by ID
router.get('/order/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  console.log(`GET request for order item with ID: ${orderId}`);
  const orderItem = categoriesData.find(item => item.id === orderId);

  if (orderItem) {
    res.json(orderItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// GET blog item
router.get('/blog', (req, res) => {
  console.log('GET request for blog items');
  res.json(blogData);
});

module.exports = router;
