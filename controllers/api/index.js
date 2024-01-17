const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');
const searchByIngredientsRoute = require('./searchByIngredientsRoute');

router.use('/recipe', recipeRoutes);
router.use('/users', userRoutes);
router.use('/searchByIngredients', searchByIngredientsRoute);

module.exports = router;
