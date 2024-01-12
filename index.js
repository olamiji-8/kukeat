// app.js
const express = require('express');
const cors = require('cors');

const dbconnect = require('./config/dbconnect');
const checkoutRouter = require('./routes/checkoutRouter');
const menuRouter = require('./routes/menuRouter'); // Include the new menuRouter
const requestLogger = require('./middlewares/requestLogger');
const storeRouter = require('./routes/menuRouter')


const app = express();
app.use(cors());

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 4000;
dbconnect();

app.use(express.json());
app.use(requestLogger)
// app.use('/api', checkoutRouter);
app.use('/api', menuRouter); // Use the menuRouter for /api/menu
// app.use('/api', storeRouter);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
