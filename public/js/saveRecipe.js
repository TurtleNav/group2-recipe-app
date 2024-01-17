const fetch = require('node-fetch');

async function saveRecipe(recipe) {


  try {
    const response = await fetch('/api/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Recipe saved successfully:', result);
    return result;
  } catch (error) {
    console.error('Error saving recipe:', error.message);
    throw error;
  }
}

module.exports = { saveRecipe };