const {Recipe} = require('../models');

const recipeData = [
  {
    title: 'Baked Apples in White Wine',
    image: 'https://spoonacular.com/recipeImages/90629-312x231.jpg',
    spoonacular_id: 90629,
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
    spoonacular_id: 284420,
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
    spoonacular_id: 640352,
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
    spoonacular_id: 674272,
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
    spoonacular_id: 157111,
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
  {
    spoonacular_id: 157103,
    title: 'Apple Cinnamon Blondies',
    image: 'https://spoonacular.com/recipeImages/157103-312x231.jpg',
    calories: 110.94,
    fat: 4.88,
    saturatedFat: 3,
    carbohydrates: 16.14,
    sugar: 11.05,
    cholesterol: 20.39,
    sodium: 71.95,
    protein: 1
  },
  {
    spoonacular_id: 775666,
    title: 'Easy Homemade Apple Fritters',
    image: 'https://spoonacular.com/recipeImages/775666-312x231.jpg',
    calories: 148.29,
    fat: 0.76,
    saturatedFat: 0.3,
    carbohydrates: 34.2,
    sugar: 25.26,
    cholesterol: 14.68,
    sodium: 207.61,
    protein: 1.86
  },
  {
    spoonacular_id: 73420,
    title: 'Apple Or Peach Strudel',
    image: 'https://spoonacular.com/recipeImages/73420-312x231.jpg',
    calories: 249.07,
    fat: 1.04,
    saturatedFat: 0.24,
    carbohydrates: 60.36,
    sugar: 42.41,
    cholesterol: 20.46,
    sodium: 216.37,
    protein: 2.75
  },
  {
    spoonacular_id: 641803,
    title: 'Easy & Delish! ~ Apple Crumble',
    image: 'https://spoonacular.com/recipeImages/641803-312x231.jpg',
    calories: 2155.14,
    fat: 71.35,
    saturatedFat: 43.95,
    carbohydrates: 379.91,
    sugar: 263.95,
    cholesterol: 182.21,
    sodium: 587.83,
    protein: 15.33
  },
  {
    spoonacular_id: 632660,
    title: 'Apricot Glazed Apple Tart',
    image: 'https://spoonacular.com/recipeImages/632660-312x231.jpg',
    calories: 657.51,
    fat: 35.27,
    saturatedFat: 21.91,
    carbohydrates: 84.27,
    sugar: 38.18,
    cholesterol: 91.11,
    sodium: 24.68,
    protein: 5.89
  },
];

// Iterate through every user and randomly assign seed recipes to them
// Duplicate recipes are allowed
const seedRecipes = () => {
  let results = [];
  const {userData} = require('./userData'); // Import userData so we can see how many users that exist
  for (let id=1; id<=userData.length; id++) {
    for (const recipe of recipeData) {
    // Do a coin toss on whether or not a recipe is added
      if (Math.random() < 0.5) {
        // Source of some errors. We MUST make a deep copy the recipe object instead of
        // working with the original due to JS object's being passed-by-reference
        // See the link for more info on this implementation
        // https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
        const recipeCopy = JSON.parse(JSON.stringify(recipe));
        recipeCopy.user_id = id;
        results.push(recipeCopy);
      }
    }
  }
  return Recipe.bulkCreate(results);
};

module.exports = seedRecipes;