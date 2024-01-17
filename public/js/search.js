/* File for handling the recipe search form in the affiliated search.handlebars file

  NOTES:
  -----
  1.) Search method text overflows out of the search form. Possibly make a CSS
      rule to decrease font size with decreasing window size

*/
const searchSelect = document.getElementById('search-method');
const searchForm = document.getElementById('search-form');

// Global variable representing the recipe search method
// 1: searchByIngredient | 2: searchByNutrient
let searchMethod;

// search method when 'Search By Ingredient' is selected
function searchByIngredient() {
  console.log('searching by ingredients...');
}

// search method when 'Search By Nutrient' is selected
function searchByNutrient() {
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

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (searchMethod) {
    searchMethod(); // Run whatever search method currently selected
  }
});