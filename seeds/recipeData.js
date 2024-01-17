const {Recipe} = require('../models');

const recipeData = [
  {
    title: 'Baked Apples in White Wine',
    image: 'https://spoonacular.com/recipeImages/90629-312x231.jpg',
    id: 90629,
    calories: 210,
    carbohydrates: 43,
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
    carbohydrates: 33,
    fat: 10,
    protein: 2,
    sodium: 389.9,
    cholesterol: 90.4,
    sugar: 27.2,
    saturatedFat: 6.5
  },
  {
    title: 'Cranberry Apple Crisp',
    image: 'https://spoonacular.com/recipeImages/640352-312x231.jpg',
    id: 640352,
    calories: 937.54,
    carbohydrates: 153.58,
    fat: 36.93,
    protein: 5.8,
    sodium: 24.8,
    cholesterol: 91.27,
    sugar: 118.73,
    saturatedFat: 22.19,
  },
  {
    id: 674272,
    title: 'Grand Apple and Cinnamon Biscuits',
    image: 'https://spoonacular.com/recipeImages/674272-312x231.jpg',
    calories: 538.31,
    carbohydrates: 88.41,
    fat: 18.09,
    protein: 9.35,
    sodium: 1061.34,
    cholesterol: 47.99,
    sugar: 34.06,
    saturatedFat: 10.98,
  },
  {
    id: 157111,
    title: 'Vegan Baked Apples with Oat Crumble',
    image: 'https://spoonacular.com/recipeImages/157111-312x231.jpg',
    calories: 287.96,
    fat: 10.46,
    saturatedFat: 0.89,
    carbohydrates: 43.88,
    sugar: 27.43,
    cholesterol: 0,
    sodium: 7.07,
    protein: 2.59
  },


  
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
