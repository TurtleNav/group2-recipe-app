require('dotenv').config();
const fetch = require('node-fetch');

async function fetchRecipesbyIngredients(ingredientsList, numberOfRecipes) {
  try {
    const apiKey = process.env.API_KEY;
    const ranking = 1; // Set ranking to 1 to maximize available ingredients

    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${numberOfRecipes}&ranking=${ranking}&apiKey=${apiKey}`;

    const recipeData = await fetch(apiUrl).then(response => response.json());

    if (recipeData.status === 'failure') {
      console.log(recipeData.message);
      throw new Error('No/invalid API key in .env file. Make sure to name it API_KEY');
    }

    console.log('API message -> ', recipeData.message);

    const recipeInfo = await Promise.all(
      recipeData.map(async recipe => {
        const nutritionUrl = `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`;

        const nutritionData = await fetch(nutritionUrl).then(response => response.json());

        for (const nutrient of nutritionData.nutrients) {
          if (nutrient.name === 'Sodium') {
            recipe.sodium = nutrient.amount;
          } else if (nutrient.name === 'Cholesterol') {
            recipe.cholesterol = nutrient.amount;
          } else if (nutrient.name === 'Sugar') {
            recipe.sugar = nutrient.amount;
          } else if (nutrient.name === 'Calories') {
            recipe.calories = nutrient.amount;
          } else if (nutrient.name === 'Fat') {
            recipe.fat = nutrient.amount;
          } else if (nutrient.name === 'Saturated Fat') {
            recipe.saturatedFat = nutrient.amount;
          } else if (nutrient.name === 'Carbohydrates') {
            recipe.carbohydrates = nutrient.amount;
          } else if (nutrient.name === 'Protein') {
            recipe.protein = nutrient.amount;
          }
        }

        return recipe;
      })
    );

    return recipeInfo;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

//User 
async function startIngredientsearch(ingredientsList, numberOfRecipes) {
    try {
      const recipeInfo = await fetchRecipesbyIngredients(ingredientsList, numberOfRecipes);
      console.log(recipeInfo);
      return recipeInfo;
   
    } catch (error) {
      // Handle errors
      console.error('Error fetching recipes:', error);
    }
}

module.exports = startIngredientsearch;
