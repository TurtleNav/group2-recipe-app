const {Recipe} = require('../models');

const recipeData = [
  {
    title: 'Baked Apples in White Wine',
    image: 'https://spoonacular.com/recipeImages/90629-312x231.jpg',
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
    image: 'https://spoonacular.com/recipeImages/284420-312x231.jpg',  
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
  {
    title: 'Cranberry Apple Crisp',
    image: 'https://spoonacular.com/recipeImages/640352-312x231.jpg',
    id: 640352,
    calories: 937.54,


  }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
