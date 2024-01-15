const router = require('express').Router();
const Recipe = require('../../models/Recipe');

const {Op} = require('sequelize');


/*
  Get route for all cached Recipes

  query parameters:
  minCalories
  maxCalories

*/
router.get('/', async (req, res) => {
  try {
    const options = { where: {} };

    // Parse out integer values for both minCalories and maxCalories.
    // If properly formatted integers then the values will be used to filter
    // results based on calorie count
    const minCalories = parseInt(req.query.minCalories);
    const maxCalories = parseInt(req.query.maxCalories);

    if (minCalories || maxCalories) {
      const calories = {};

      if (minCalories) {
        Object.assign(calories, {[Op.gte]: minCalories});
      }
      if (maxCalories) {
        Object.assign(calories, {[Op.lte]: maxCalories});
      }
      options.where.calories = calories;
    }

    const recipeData = await Recipe.findAll(options);
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

/*
  Get recipe by calorie content

router.get('/:calories?', async (req, res) => {
  try {
    console.log(req.params.calories);
    const recipeData = await Recipe.findAll();
    res.status(200).json(recipeData);
  } catch(err) {
    console.error(err);
    res.status(404).json(err);
  }
});

*/


router.post('/', async (req, res) => {
  const newRecipeData = await Recipe.create(req.body);

  res.json(newRecipeData);
});
module.exports = router;