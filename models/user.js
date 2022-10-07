'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

  };
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING
  }, 
  {
    sequelize,
    underscored: true,
    modelName: 'User'
  });
  return User;
};