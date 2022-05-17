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

User.belongsToMany(Bootcamp, {
    through: Comment,
    as: 'bootcamp_comment',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

Bootcamp.hasMany(Comment, {
    foreignKey: 'bootcamp_id',
  });

Bootcamp.hasMany(Rating, {
    foreignKey: 'bootcamp_id',
  });

// Bootcamp.belongsToMany(User, {
//     through: Comment,
//     as: 'bootcamp_comment',
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });

Bootcamp.belongsToMany(User, {
    through: Rating,
    as: 'bootcamp_rating',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

// Comment.belongsTo(Bootcamp, {
//     foreignKey: 'bootcamp_id',
//   });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//   });


Rating.belongsTo(Bootcamp, {
    foreignKey: 'bootcamp_id',
  });

Rating.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Rating, Bootcamp, Comment };
