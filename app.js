const express = require("express");
const app=express()
require("dotenv").config();
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const helmet = require('helmet');
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(cors());
 
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:8000"], 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
   
  
app.use(cors(corsOptions));
const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);


const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded( { extended: true} ));
app.use(express.static('public'));
app.use(expressLayouts); 


app.listen(port, ()=> console.log('Listening to port 3000'));
