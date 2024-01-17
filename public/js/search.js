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

console.log(searchForm);

// search method when 'Search By Ingredient' is selected
function searchByIngredient() {
  console.log('searching by ingredients...');
}

// search method when 'Search By Nutrient' is selected
function searchByNutrient() {
  console.log('searching by nutrients...');
}

// Whenever an option is selected, reassign the global searchMethod variable
searchSelect.addEventListener('change', () => {
  searchMethod = searchSelect.selectedIndex;
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (searchMethod === 1) {
    searchByIngredient();
  } else if (searchMethod === 2) {
    searchByNutrient();
  } else {
    console.log('A search method needs to be selected before you can search');
  }
});