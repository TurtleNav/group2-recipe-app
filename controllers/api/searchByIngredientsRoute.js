const router = require('express').Router();
const startIngredientsearch = require('./fetchIngredientsv2');

router.post('/', async (req, res) => {
  try {
    const ingredientsList = req.body.ingredientsList;
    const result = JSON.stringify(startIngredientsearch(ingredientsList, 3));
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
