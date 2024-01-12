const router = require('express').Router();
const Recipe = require('../../models/Recipe');



router.get('/', async (req, res) => {
  const recipeData = await Recipe.findAll();

  res.json(recipeData);
});



router.post('/', async (req, res) => {
  const newRecipeData = await Recipe.create(req.body);

  res.json(newRecipeData);
});


module.exports = router;