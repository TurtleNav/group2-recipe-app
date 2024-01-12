const apiKey = '8d3a74b58a844dd0880bad6638d783d0'; // Replace with your actual API key

const userSearch = 'pasta';
const maxCalories = 700;
const numberOfResults = 2;

const fillingIngredients = true;
const addRecipeNutrition = true;


const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userSearch}&maxCalories=${maxCalories}&number=${numberOfResults}&fillingredents=${fillingIngredients}&addRecipeNutrition=${addRecipeNutrition}&apiKey=${apiKey}`;

let fetchedData = [];
let nutritionInformationRaw = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    fetchedData = data.results;
    fetchedData.forEach(recipe => {
      const nutritionInfo = recipe.nutrition; // Fixed the reference to nutrition
      nutritionInformationRaw.push(nutritionInfo); // Added the nutritionInfo to the array
    });
    
    console.log(nutritionInformationRaw)
    console.log(nutritionInformationRaw[0].nutrients);
    const mappedData = nutritionInformationRaw.map(recipe => {
      const first9Nutrients = recipe.nutrients.slice(0, 9); // Save the first 9 objects in the nutrients property
      const ingredients = recipe.ingredients; // Save the entire ingredients property
    
      return {
        first9Nutrients,
        ingredients,
      };
    });
    
    console.log(mappedData);

   
   
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