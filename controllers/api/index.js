const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');
const searchByIngredientsRoute = require('./searchByIngredientsRoute');
const searchByNutrientsRoute = require('./searchByNutrientsRoute');

router.use('/recipe', recipeRoutes);
router.use('/users', userRoutes);
router.use('/searchByIngredients', searchByIngredientsRoute);
router.use('/searchByNutrients', searchByNutrientsRoute);

module.exports = router;
