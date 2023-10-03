const express = require ("express");
const dbconnect = require("./config/dbconnect");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000
dbconnect();
app.listen(PORT,()=>{
    console.log(`This port is running on ${PORT} `)
})