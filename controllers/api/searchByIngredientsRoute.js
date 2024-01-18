const router = require('express').Router();
const startIngredientsearch = require('./fetchIngredientsv2');

router.post('/', async (req, res) => {
  try {
    const ingredientsList = req.body.ingredientsList;
    const results = await startIngredientsearch(ingredientsList, 3);
    console.log('results ----> ', results);
    res.render('search', {results: results});
    //window.location.reload();
    //res.status(200).json({message: 'hi'}); //.json(JSON.stringify(results));
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
