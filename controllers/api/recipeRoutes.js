const router = require('express').Router();
const Recipe = require('../../models/Recipe');

/*
  Get route for all cached Recipes
*/
router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll();
    res.status(200).json(recipeData);
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
});

/*
  Get recipe by id
*/
router.get('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    res.status(200).json(recipeData);
  } catch(err) {
    console.error(err);
    res.status(404).json(err);
  }
});


router.post('/', async (req, res) => {
  const newRecipeData = await Recipe.create(req.body);

  res.json(newRecipeData);
});
module.exports = router;