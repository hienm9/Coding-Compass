const router = require('express').Router();
const sequelize = require('../config/connection');
const { Bootcamp, User, Comment, Rating } = require('../models');

router.get("/",(req, res)=>{
  res.render("homepage")
});
router.get("/account",(req, res)=>{
  res.render("account")
});
// router.get("/results",(req, res)=>{
//   res.render("results")
// });
// router.get("/single-bootcamp",(req, res)=>{
//   res.render("single-bootcamp")
// });

// get all posts for homepage
router.get('/', (req, res) => {
    Bootcamp.findAll({
      attributes: [
        'id',
        'name',
        'info',
    ],
    })
      .then(dbBootcampData => {
        const bootcamps = dbBootcampData.map(bootcamp => bootcamp.get({ plain: true }));
  
        res.render('results', {
          bootcamps,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // get single post
router.get('/bootcamp/:id', (req, res) => {
    Bootcamp.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'info',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: Rating,
          attributes: ['id', 'rating', 'user_id', 'created_at'],
          include: {
              model: User,
              attributes: ['username']
          }
        }
      ]
    })
      .then(dbBootcampData => {
        if (!dbBootcampData) {
          res.status(404).json({ message: 'No bootcamp found with this id' });
          return;
        }
  
        const bootcamp = dbBootcampData.get({ plain: true });
  
        res.render('single-bootcamp', {
          bootcamp,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  