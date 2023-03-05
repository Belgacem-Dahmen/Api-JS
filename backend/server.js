const express = require('express');

const dotenv = require('dotenv').config()
const connectDB = require('./Config/db');

const port = 5000;
//connex a la DB 

connectDB();
//initialisation de l'application express
const app= express();

//Middelwares 
app.use(express.json());
app.use(express.urlencoded({extended: false}))




app.use("/posts" , require("./routes/post.routes"))
//lancer le serveur 
app.listen(port , () => console.log(" Server is listening on port "+ port))









