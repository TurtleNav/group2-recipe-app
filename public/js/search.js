/* File for handling the search form in the affiliated search.handlebars file

  NOTES:
  -----
  1.) Search method text overflows out of the search form. Possibly make a CSS
      rule to decrease font size with decreasing window size

*/
const searchSelectEl = document.getElementById('search-method');

searchSelectEl.addEventListener('change', () => {
  console.log(`hey you clicked on the ${searchSelectEl.selectedIndex}`);
});