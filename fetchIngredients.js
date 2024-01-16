const apiKey = '8d3a74b58a844dd0880bad6638d783d0'; // Replace with your actual API key

const ingredientsList = 'apples,flour,sugar';
const numberOfRecipes = 1;
const ranking = 1;

const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${numberOfRecipes}&ranking=${ranking}&apiKey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    
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
            // console.log(nutritionData)

            for (const nutrient of nutritionData.nutrients) {
                if (nutrient.name === "Sodium") {
                  recipe.sodium = nutrient.amount;
                } else if (nutrient.name === "Cholesterol") {
                  recipe.cholesterol = nutrient.amount;
                } else if (nutrient.name === "Sugar") {
                  recipe.sugar = nutrient.amount;
                } else if (nutrient.name === "Calories") {
                  recipe.calories = nutrient.amount; 
                } else if (nutrient.name === "Fat") {
                  recipe.fat = nutrient.amount; 
                } else if (nutrient.name === "Saturated Fat") {
                  recipe.saturatedFat = nutrient.amount; 
                } else if (nutrient.name === "Carbohydrates") {
                  recipe.carbohydrates = nutrient.amount; 
                } else if (nutrient.name === "Protein") {
                  recipe.protein = nutrient.amount; 
                }
                
            }
            console.log(RecipeInfo)
        //   // Attach the nutrition data to the corresponding recipe
        //   recipe.calories = nutritionData.calories,
        //   recipe.carbs = nutritionData.carbs,
        //   recipe.fat = nutritionData.fat,
        //   recipe.protein = nutritionData.protein
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
    // console.log(RecipeInfo);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  