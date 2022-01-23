const Restaurant = require('../models/restaurantDB');

// POST /api/restaurants
exports.createRestaurant = async (req, res, next) => {
  try {
  const restaurant = await Restaurant.create(req.body);

  res.status(201).json({ success: true, data: restaurant });
  } catch (err) {
    res.status(400).json( { success: false });
  }
};

// GET /api/restaurants
exports.getRestaurants = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.find();

    res.status(200).json({ success: true, data: restaurant });
  } catch (err) {
    res.status(400).json( { success: false });
  }  
};

// GET /api/restaurants/:id
exports.getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    res.status(200).json({ success: true, data: restaurant });
  } catch (err) {
    res.status(400).json( { success: false });
  }
};

// PUT /api/restaurants/:id
exports.updateRestaurant = (req, res, next) => {
  res.status(200).json({ success: true, message: `Update restaurant ${req.params.id}` });
};

// DELETE /api/restaurants/:id
exports.deleteRestaurant = (req, res, next) => {
  res.status(200).json({ success: true, message: `Delete restaurant ${req.params.id}` });
};
