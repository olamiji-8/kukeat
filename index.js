// app.js
const express = require('express');
const dbconnect = require('./config/dbconnect');
const checkoutRouter = require('./routes/checkoutRouter');
const menuRouter = require('./routes/menuRouter'); // Include the new menuRouter

const app = express();
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 4000;
dbconnect();

app.use(express.json());

app.use('/api', checkoutRouter);
app.use('/api', menuRouter); // Use the menuRouter for /api/menu



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
