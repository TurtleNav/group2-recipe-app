const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');


router.use('/recipe', recipeRoutes);



module.exports = router;