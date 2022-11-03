const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// password: fePoLn2n9BleWZ6j

const uri = "mongodb+srv://emaJohnDbUser :fePoLn2n9BleWZ6j@cluster0.k5k5bzp.mongodb.net/?retryWrites=true&w=majority";



app.get('/',(req, res)=>{
    res.send("this simple server is running");
})

app.listen(port, ()=>{
    console.log(`ema jhon running on: ${port}`);
})