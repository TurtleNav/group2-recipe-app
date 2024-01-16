const router = require('express').Router();
const Recipe = require('../../models/Recipe');

const { Op } = require('sequelize');

// Map object that maps a SQL model's name to query parameters
const queryParams = new Map([
  ['calories', ['minCalories', 'maxCalories']],
  ['carbs', ['minCarbs', 'maxCarbs']],
  ['fat', ['minFat', 'maxFat']],
  ['protein', ['minProtein', 'maxProtein']],
]);

/*
  Get route for all cached Recipes

  query parameters:

  minCalories
  maxCalories

  minCarbs
  maxCarbs

  minFat
  maxFat

  minProtein
  maxProtein
*/
router.get('/', async (req, res) => {
  try {
    const options = { where: {} };

    // params is the array of values in the queryParams map
    // family is a key in the queryParams map
    queryParams.forEach((params, family) => {
      let queryObj;
      for (const param of params) {
        if (Object.hasOwn(req.query, param)) {
          const paramValue = parseInt(req.query[param]);

          if (paramValue) {
            if (!queryObj) {
              // Create an object for the query rules to be added to the 'options' object
              options.where[family] = queryObj = {};
            }

            if (param.startsWith('min')) {
              Object.assign(queryObj, { [Op.gte]: paramValue });
            } else if (param.startsWith('max')) {
              Object.assign(queryObj, { [Op.lte]: paramValue });
            } else {
              throw new Error('Invalid query parameter');
            }
          }
        }
      }
    });
    const recipeData = await Recipe.findAll(options);
    res.status(200).json(recipeData);
  } catch (err) {
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
  } catch (err) {
    console.error(err);
    res.status(404).json(err);
  }
});

// /api/recipes
router.get('/byuser', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        user_id: req.session.user.id,
      },
    });
    res.status(200).json(recipeData);
  } catch (err) {
    console.error(err);
    res.status(404).json(err);
  }
});

router.post('/', async (req, res) => {
  const newRecipeData = await Recipe.create(req.body);

  res.json(newRecipeData);
});

module.exports = router;
