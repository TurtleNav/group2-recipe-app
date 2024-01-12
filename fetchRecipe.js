const apiKey = '8d3a74b58a844dd0880bad6638d783d0' // Replace with your actual API key

const userSearch = 'pasta';
const maxCalories = 700;
const numberOfResults = 5;

const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userSearch}&maxCalories=${maxCalories}&number=${numberOfResults}&apiKey=${apiKey}`;

let fetchedData = [];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    fetchedData = data;
    console.log(fetchedData)// Handle the data as needed
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  const nutritionInformation = [];

// Iterate through each recipe and store the nutrition information in the array
fetchedData.forEach(recipe => {
  nutritionInformation.push({
    title: recipe.title,
    nutrition: recipe.nutrition,
  });
});

// Now, the nutritionInformation array contains the nutrition information for each recipe
console.log(nutritionInformation);