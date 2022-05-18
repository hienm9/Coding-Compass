const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Bootcamp extends Model {
    // set up method to run on instance data (per user) to check password
   
  }

  Bootcamp.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bootcamp_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      info: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bootcamp'
      }
    );
    
    module.exports = Bootcamp;
    
  