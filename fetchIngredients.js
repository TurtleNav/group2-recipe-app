require('dotenv').config();
const fetch = require('node-fetch');

const ranking = 1;

async function fetchRecipesbyIngredients(ingredientsList='flour,eggs,apples', numberOfRecipes=3) {
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${numberOfRecipes}&ranking=${ranking}&apiKey=${apiKey}`;

  const recipeData = await fetch(apiUrl).then(response => response.json())
  const recipeInfo = recipeData.map(recipe => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    missedIngredients: recipe.missedIngredients,
    usedIngredients: recipe.usedIngredients
  }));

      const nutritionRequests = recipeInfo.map(recipe => {
        const nutritionUrl = `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`;

        return fetch(nutritionUrl)
          .then(response => response.json())
          .then(nutritionData => {
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
          })
          .catch(error => {
            console.error('Error fetching nutrition data:', error);
          });
      });
     
      return Promise.all(nutritionRequests).then(() => recipeInfo);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; 
    });
}
  
fetchRecipesbyIngredients()
