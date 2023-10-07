const express = require ("express");
const dbconnect = require("./config/dbconnect");
const  checkoutRouter = require("./routes/checkoutRouter");

const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000
dbconnect();
app.use(express.json)
app.use("/api", checkoutRouter);
app.post("/", (req, res)=>{
    res.json({'firstname': 'ola'})    
    });
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `)
})