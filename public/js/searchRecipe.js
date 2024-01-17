const { combineTableNames } = require("sequelize/types/utils");

const searchRecipeFormHandler = async (event) => {
  event.preventDefault();

  const searchTerm = document.querySelector('').value.trime;

  if (searchTerm) {
    const response = await fetch('', {
      method: 'GET',
      body: JSON.stringify({ searchTerm }),
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

document.querySelector('').addEventListener('click', searchRecipeFormHandler )