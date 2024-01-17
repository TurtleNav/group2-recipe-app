const saveRecipeFormHandler = async (event) => {
  event.preventDefault();

  const saveRecipeInput = document.querySelector('').value.trim();

  if (saveRecipeInput) {
    const response = await fetch('', {
      method: 'POST',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipe: saveRecipeInput })
    });

    if (response.ok) {
      const recipes = await response.json();

      console.log(recipes); 
    } else {
      alert('Failed to save recipe.');
    }

  }

};

document.querySelector('').addEventListener('click', saveRecipeFormHandler);