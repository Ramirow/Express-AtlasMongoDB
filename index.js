const express = require("express");
const app = express();
const mongoose = require("mongoose")
require('dotenv/config');
const bodyParser = require('body-parser');
//Import Routes
const postsRoute = require('./routes/posts'); 
const connectDB = require('./DB/Connection');

//Connect to data base
connectDB();

app.use(express.json());

app.use('/posts',postsRoute);


//ROUTES 
app.get('/',(req,res) => {
   res.send("We are at home");     
})






//HOE DO WE START LISTEN THE SERVER 
app.listen(3000,() => console.log("Server is listening to port 3000"));  