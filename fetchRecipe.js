require('dotenv').config();
const apiKey = process.env.API_KEY;


const userSearch = 'pasta';
const maxCalories = 700;
const numberOfResults = 1;

const fillingIngredients = true;
const addRecipeNutrition = true;


const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userSearch}&maxCalories=${maxCalories}&number=${numberOfResults}&fillingredents=${fillingIngredients}&addRecipeNutrition=${addRecipeNutrition}&apiKey=${apiKey}`;

let fetchedData = [];
let recipeInfo = [];
let nutritionInformationRaw = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    fetchedData = data.results;
    recipeInfo = fetchedData.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      ingredients: recipe.nutrition.ingredients,
      nutrition: recipe.nutrition.nutrients.slice(0, 9)
     
    }))

    console.log(recipeInfo[0].nutrition)
     
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    
  });



    //   // Iterate through nutrients array and log each nutrient
    //   // recipe.nutrition.nutrients.forEach(nutrient => {
    //   //   console.log(`Nutrient: ${nutrient.title}, Amount: ${nutrient.amount}${nutrient.unit}`);
    //   //   recipeInfo.nutrition.nutrients.push({
    //   //     title: nutrient.title,
    //   //     amount: nutrient.amount,
    //   //     unit: nutrient.unit
    //   //   });
    //   // });

    //   nutritionInformation.push(recipeInfo);
    // });

    // Now, the nutritionInformation array contains the nutrition information for each recipe
  //   console.log(nutritionInformation);
  // })
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  // });
