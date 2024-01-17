const { combineTableNames } = require("sequelize/types/utils");

const searchRecipeFormHandler = async (event) => {
  event.preventDefault();

  const searchRecipeInput = document.querySelector('').value.trim;

  if (searchTerm) {
    const response = await fetch('', {
      method: 'GET',
      body: JSON.stringify({ searchRecipeInput }),
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      const recipes = await response.json();

      console.log(recipes); 
    } else {
      alert('Failed to search recipes.');
    }

  }

};

document.querySelector('').addEventListener('click', searchRecipeFormHandler);