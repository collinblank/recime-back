'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
    {
      name: 'Peanut Butter and Jelly',
      ingredientList: 'Peanut Butter, Jelly, Bread',
      cookTime: '1',
      instructions: 'Take two loaves of bread and add Peanut butter and jelly to both slices.  Put bread together.'
    },
    {
      name: 'Tomato Soup',
      ingredientList: 'Tomato Soup',
      cookTime: '1',
      instructions: 'Add Tomato to Sauce Pan.  Heat until warm.'
    },
    {
      name: 'Brownies',
      ingredientList: 'Pre Made Brownie Batter, Eggs, Milk',
      cookTime: '2',
      instructions: 'Whisk Pre Made Brownie Batter, eggs and milk in a bowl.  Once smooth poor into baking dish and bake at 350 for 40 minutes.'
    },
    {
        name: 'Cereal',
        ingredientList: 'Cereal, Milk',
        cookTime: '1',
        instructions: 'Pour cereal into bowl. Add Milk.'
    }

  ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Recipes', null, {})
  }
};
