// import all models
const Rating = require('./Rating');
const User = require('./User');
const Bootcamp = require('./Bootcamp');
const Comment = require('./Comment');

// create associations
User.hasMany(Rating, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
  });

User.belongsToMany(Bootcamp, {
  through: Rating,
  as: 'bootcamp_rating',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User.belongsToMany(Bootcamp, {
//     through: Comment,
//     as: 'bootcamp_comment',
//     foreignKey: {name: 'user_id', unique: false},
//     unique: false,
//     onDelete: 'SET NULL'
//   });

Bootcamp.hasMany(Comment, {
    foreignKey: 'bootcamp_id',
  });

Bootcamp.hasMany(Rating, {
    foreignKey: 'bootcamp_id',
  });

// Bootcamp.belongsToMany(User, {
//     through: Comment,
//     as: 'bootcamp_comment',
//     foreignKey: {name: 'bootcamp_id', unique: false},
//     unique: false,
//     onDelete: 'SET NULL'
//   });

Bootcamp.belongsToMany(User, {
    through: Rating,
    as: 'bootcamp_rating',
    foreignKey: 'bootcamp_id',
    onDelete: 'SET NULL'
  });

Comment.belongsTo(Bootcamp, {
    foreignKey: {name: 'bootcamp_id', unique: false}
  });

Comment.belongsTo(User, {
    foreignKey: {name: 'user_id', unique: false}
  });

Rating.belongsTo(Bootcamp, {
    foreignKey: 'bootcamp_id'
  });

Rating.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Rating, Bootcamp, Comment };
