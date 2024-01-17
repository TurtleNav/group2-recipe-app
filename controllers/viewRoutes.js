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
    res.render('dashboard', { loggedIn: req.session.loggedIn });
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
