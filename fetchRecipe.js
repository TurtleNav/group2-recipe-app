const apiKey = require("./config/connection")


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
      // const first9Nutrients = recipe.nutrients; 
      // const first9Macros = first9Nutrients.map(macro => ({
      //   name: macro.name,
      //   amount: macro.amount
      // }))
      // // const first9Macros = // Save the first 9 objects in the nutrients property
      // const ingredients = recipe.ingredients; // Save the entire ingredients property
    
      // return {
      //   first9Macros,
      //   ingredients,
      // };
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    
  });

    // Process the fetched data here
    // fetchedData.forEach(recipe => {
    //   const recipeInfo = {
    //     title: recipe.title,
    //     nutrition: {
    //       nutrients: []
    //     }
    //   };

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
