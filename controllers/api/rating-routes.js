const router = require('express').Router();
const { Rating, User } = require('../../models');
const withAuth = require('../../utils/auth');

//get all ratings
router.get('/', (req, res) => {
  Rating.findAll()
    .then(dbRatingData => res.json(dbRatingData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create rating
router.post('/', withAuth, (req, res) => {
  Rating.create({
    rating_num: req.body.rating_num,
    user_id: req.session.user_id,
    bootcamp_id: req.body.bootcamp_id
  })
    .then(dbRatingData => res.json(dbRatingData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

//delete rating
router.delete('/:id', withAuth, (req, res) => {
  Rating.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRatingData => {
      if (!dbRatingData) {
        res.status(404).json({ message: 'No rating found with this id!' });
        return;
      }
      res.json(dbRatingData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
