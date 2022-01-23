/*********************************************************************************
 *  WEB422 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Thai Hoa Huynh Student ID: 114968191 Date: 21/01/2022
 *  Heroku Link: https://backendforweb422.herokuapp.com/api/
 *
 ********************************************************************************/
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Connect to database

connectDB();

// Route files
const restaurants = require('./routes/restaurants');

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/restaurants', restaurants);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
