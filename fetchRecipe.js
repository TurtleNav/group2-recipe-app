const apiKey = '8d3a74b58a844dd0880bad6638d783d0' // Replace with your actual API key

const userSearch = 'pasta';
const maxCalories = 700;
const numberOfResults = 5;

const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${userSearch}&maxCalories=${maxCalories}&number=${numberOfResults}&apiKey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)// Handle the data as needed
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  results.forEach(recipe => {
    console.log(`Nutrition for ${recipe.title}:`, recipe.nutrition);
  });