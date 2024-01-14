const {Recipe} = require('../models');

const recipeData = [
  {
    'title': 'Baked Apples in White Wine',
    'id': 90629,
    'calories': 210,
    'carbs': '43g',
    'fat': '3g',
    'protein': '1g'
  },
  {
    'title': 'Chocolate Silk Pie with Marshmallow Meringue',
    'id': 284420,
    'calories': 226,
    'carbs': '33g',
    'fat': '10g',
    'protein': '2g'
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;