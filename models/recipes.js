'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipes.init({
    recipeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    ingredientList: {
        type: DataTypes.TEXT
    },
    cookTime: {
        type: DataTypes.INTEGER,
    },
    instructions: {
        type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Recipes',
    tableName: 'Recipes',
    timestamps: false
  });
  return Recipes;
};