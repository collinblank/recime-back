'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recipes', {
      recipeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
        
      },
      ingredientList: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      cookTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      instructions: {
        allowNull: false,
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recipes');
  }
};