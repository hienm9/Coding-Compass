const { Rating } = require('../models');

const ratingdata = [
  {
    rating_num: '2',
    user_id: 5,
    bootcamp_id: 1
  },
  {
    rating_num: '2',
    user_id: 4,
    bootcamp_id: 4
  },
  {
    rating_num: '3',
    user_id: 3,
    bootcamp_id: 2
  },
];

const seedRatings = () => Rating.bulkCreate(ratingdata);

module.exports = seedRatings;
