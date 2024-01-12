const apiKey = '8d3a74b58a844dd0880bad6638d783d0'; // Replace with your actual API key

const userSearch = 'pasta';
const maxCalories = 700;
const numberOfResults = 5;

const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userSearch}&maxCalories=${maxCalories}&number=${numberOfResults}&apiKey=${apiKey}`;

let fetchedData = [];
let nutritionInformation = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    fetchedData = data.results;
    fetchedData.forEach(recipe => {
      const nutritionInfo = recipe.nutrition; // Fixed the reference to nutrition
      nutritionInformation.push(nutritionInfo); // Added the nutritionInfo to the array
    });
    console.log(nutritionInformation); // Moved this line outside the forEach loop
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