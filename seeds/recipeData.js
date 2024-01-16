const {Recipe} = require('../models');

const recipeData = [
  {
    title: 'Baked Apples in White Wine',
    id: 90629,
    calories: 210,
    carbs: 43,
    fat: 3,
    protein: 1,
    sodium: 154.2,
    cholesterol: 27.8,
    sugar: 34,
    saturatedFat: 1.1
  },
  {
    title: 'Chocolate Silk Pie with Marshmallow Meringue',
    id: 284420,
    calories: 226,
    carbs: 33,
    fat: 10,
    protein: 2,
    sodium: 389.9,
    cholesterol: 90.4,
    sugar: 27.2,
    saturatedFat: 6.5
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;