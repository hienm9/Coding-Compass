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

// filter
// router.get('/results', (req, res) => {
//   Bootcamp.findAll({
//     // where: {
//     // schoolname: req.body.schoolname || "OSU"
//     // },
//     attributes: [
//       'id',
//       'name',
//       'info',
//       'bootcamp_url',
//     ],
//   })
//     .then(dbBootcampData => {
//       const search = req.body.name // the || and "cod" were put in for testing the search work. 
//       const bootcamps = dbBootcampData.map(bootcamp => bootcamp.get({ plain: true })).filter(bootcamp => {
//         return bootcamp.name.toLowerCase().includes(search.toLowerCase())
//       })
//       console.log(bootcamps);
//       res.render('results', {
//         bootcamps,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get('/results/:query', (req, res) => {
  Bootcamp.findAll({
    attributes: [
      'id',
      'name',
      'info',
      'bootcamp_url',
      'location'
    ]
  })
    .then(dbBootcampData => {
      const search = req.params.query
      const bootcamps = dbBootcampData.map(bootcamp => bootcamp.get({ plain: true })).filter(bootcamp => {
        return bootcamp.name.toLowerCase().includes(search.toLowerCase())
      })
      // console.log(bootcamps);
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

router.get('/results', (req, res) => {
    Bootcamp.findAll({
      attributes: [
        'id',
        'name',
        'info',
        'bootcamp_url',
        'location'
    ]
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

  router.get('/sign-up', (req, res) => {
    res.render('sign-up');
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
        'bootcamp_url',
        'courses',
        'location'
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
  