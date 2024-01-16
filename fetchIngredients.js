const apiKey = '8d3a74b58a844dd0880bad6638d783d0'; // Replace with your actual API key

const ingredientsList = 'apples,flour,sugar';
const numberOfRecipes = 1;
const ranking = 1;

const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${numberOfRecipes}&ranking=${ranking}&apiKey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data; // Returning data for further use
  })
  .then(data => {
    RecipeInfo = data.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      missedIngredients: recipe.missedIngredients,
      usedIngredients: recipe.usedIngredients
    }));
    // console.log(RecipeInfo);

    // Perform another fetch for each recipe's ID
    const nutritionRequests = RecipeInfo.map(recipe => {
      const nutritionUrl = `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`;
      
      return fetch(nutritionUrl)
        .then(response => response.json())
        .then(nutritionData => {
          // Attach the nutrition data to the corresponding recipe
          recipe.nutritionData = nutritionData;
        })
        .catch(error => {
          console.error('Error fetching nutrition data:', error);
        });
    });

    // Wait for all nutrition requests to complete before moving forward
    return Promise.all(nutritionRequests);
  })
  .then(() => {
    // Now RecipeInfo contains nutritionData for each recipe
    console.log(RecipeInfo);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

