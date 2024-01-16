const apiKey = '8d3a74b58a844dd0880bad6638d783d0'; // Replace with your actual API key

const ingredientsList = 'apples,flour,sugar';
const numberOfRecipes = 2;
const ranking = 1;

const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${numberOfRecipes}&ranking=${ranking}&apiKey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
     console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });