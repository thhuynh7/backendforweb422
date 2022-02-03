// Heroku Link: https://backendforweb422.herokuapp.com/api/

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// const morgan = require('morgan')

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

const server = app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
})
