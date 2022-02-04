const mongoose = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');

const restaurantSchema = new mongoose.Schema({
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number
    }
  ],
  name: String,
  restaurant_id: String
});

restaurantSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant; // CAPITALIZED JS ClassName

//--DONE--

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// restaurantSchema.pre('save', function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// QUERY MIDDLEWARE
// restaurantSchema.pre(/^find/, function(next) {
//   this.find({ secretRestaurant: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// restaurantSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// AGGREGATION MIDDLEWARE
// restaurantSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretRestaurant: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });
