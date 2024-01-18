/* File for handling the recipe search form in the affiliated search.handlebars file

  NOTES:
  -----
  1.) Search method text overflows out of the search form. Possibly make a CSS
      rule to decrease font size with decreasing window size

*/

// api/searchByIngredients
// api/searchByNutrients

//const searchSelect = document.getElementById('search-select');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const resultsDiv = document.getElementById('results');

function makeResultCard(recipe, i) {
  return `<div class="accordion" id="accordionExample">
<!-- Accordion item for each recipe -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading${i}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">${recipe.title}</button>
    </h2>
    <div id="collapse${i}" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div class="accordion-body" style="background-color: #6a95c2;">
        <!-- Content for each Recipe -->
        <div class="row justify-content-center">
          <div class="card border-warning mb-3" style="max-width: 540px; padding:3px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${recipe.image}" class="img-fluid rounded" alt="..." style="margin: 20px 6px 6px 6px">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${recipe.title}</h5>
                  <h6 class="card-subtitle mb-2">Nutrition Facts</h6>
                  <hr class="dotted">
                  <p class="card-text">Calories: ${recipe.calories}kcal</p>
                  <p class="card-text">Carbohydrates: ${recipe.carbohydrates}g</p>
                  <p class="card-text">Fat: ${recipe.fat}g</p>
                  <p class="card-text">Protein: ${recipe.protein}g</p>
                  <p class="card-text">Sodium: ${recipe.sodium}mg</p>
                  <p class="card-text">Cholesterol: ${recipe.cholesterol}mg</p>
                  <p class="card-text">Sugar: ${recipe.sugar}g</p>
                  <p class="card-text">Saturated Fat: ${recipe.saturatedFat}g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

// search method when 'Search By Ingredient' is selected
// assuming user has already provided comma separated values:
async function searchByIngredient() {
  console.log('searching by ingredients...');
  try {
    const userInput = searchInput.value.replaceAll(' ', ','); // sanitize user input
    const response = await fetch('/api/searchByIngredients', {
      method: 'POST',
      body: JSON.stringify({'ingredientsList': userInput}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('response ---> ', response);
    const result = await response.json();
    console.log('result --> ', result);

    resultsDiv.innerHTML = result.map((recipe, i) => makeResultCard(recipe, i)).join('\n');
  } catch (err) {
    console.error(err);
  }
}

// Global variable representing the recipe search method
// 1: searchByIngredient | 2: searchByNutrient
const searchMethod = searchByIngredient;


// search method when 'Search By Nutrient' is selected
async function searchByNutrient() {
  console.log('searching by nutrients...');
}

// Render additional input forms for the nutrients the user wishes
// to filter recipes by
function toggleOnNutrientParams() {
  console.log('toggling on nutrient input forms');
}

// Hide the rendered nutrient input form
function toggleOffNutrientParams() {
  console.log('toggling off nutrient input forms');
}

// Whenever an option is selected, reassign the global searchMethod variable
// fix this event listener at some point
/*
searchSelect.addEventListener('change', () => {
  switch (searchSelect.selectedIndex) {
  case 1:
    searchMethod = searchByIngredient;
    break;
  case 2:
    searchMethod = searchByNutrient;
    toggleOnNutrientParams();
    return;
  default:
    console.log('A search method needs to be selected before you can search');
  }
  toggleOffNutrientParams();
});
*/

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (searchMethod) {
    searchMethod(); // Run whatever search method currently selected
  }
});