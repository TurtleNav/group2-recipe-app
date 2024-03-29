require('dotenv').config();
const fetch = require('node-fetch');

function fetchRecipes(userSearch="pasta", maxCalories=400, numberOfResults=4) {
  const apiKey = process.env.API_KEY;
  const fillingIngredients = true;
  const addRecipeNutrition = true;

  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userSearch}&maxCalories=${maxCalories}&number=${numberOfResults}&fillingredents=${fillingIngredients}&addRecipeNutrition=${addRecipeNutrition}&apiKey=${apiKey}`;

  let fetchedData = [];
  let recipeInfo = [];
 

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      fetchedData = data.results;
      recipeInfo = fetchedData.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        ingredients: recipe.nutrition.ingredients,
        nutrition: recipe.nutrition.nutrients.slice(0, 9)
      }));

      console.log(recipeInfo[0].nutrition);
      return recipeInfo;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error for handling at the higher level if needed
    });
}

console.log(fetchRecipes())


