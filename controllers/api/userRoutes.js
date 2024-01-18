const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: dbUserData.id,
        email: dbUserData.email,
        name: dbUserData.name,
      };
      res.status(200).json({ user: dbUserData, message: 'Login Successful' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'Invalid Email/Password' });
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid Email/Password' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: dbUserData.id,
        email: dbUserData.email,
        name: dbUserData.name,
      };
      res.status(200).json({ user: dbUserData, message: 'Login Successful' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      res.render('all');
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
