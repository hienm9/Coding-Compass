const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/user/:id', withAuth, (req, res) => {
   User.findOne({
       where: {
           user_id: req.session.user_id
       },
       attributes: [
           'id',
           'username',
           'email',
           'password'
       ]
   })
   .then(dbUserData => {
    if (dbUserData) {
      const user = dbUserData.get({ plain: true });
      
      res.render('account', {
        user,
        loggedIn: true
      });
    } else {
      res.status(404).end();
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });

});