const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

// router.param('id', restaurantController.checkID);

router
  .route('/top-5-cheap')
  .get(restaurantController.aliasTopRestaurants, restaurantController.getAllRestaurants);

router.route('/restaurant-stats').get(restaurantController.getRestaurantStats);
router.route('/monthly-plan/:year').get(restaurantController.getMonthlyPlan);

router
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

router
  .route('/:id')
  .get(restaurantController.getRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

module.exports = router;
