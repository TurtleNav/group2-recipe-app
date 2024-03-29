const { Recipe } = require('../models');

const viewRouter = require('express').Router();

viewRouter.get('/', async (req, res) => {
  try {
    res.render('all', { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

viewRouter.get('/dashboard', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        user_id: req.session.user.id,
      },
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('dashboard', { loggedIn: req.session.loggedIn, recipes });
  } catch (err) {
    res.status(500).json(err);
  }
});

viewRouter.get('/profile', async (req, res) => {
  try {
    res.render('profile', {
      loggedIn: req.session.loggedIn,
      email: req.session.user.email,
      name: req.session.user.name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

viewRouter.get('/search', async (req, res) => {
  try {
    res.render('search', { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

viewRouter.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

viewRouter.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});
module.exports = viewRouter;
