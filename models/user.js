'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

  };
  User.init({
    user_id: {
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
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};