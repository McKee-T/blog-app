const router = require('express').Router();
const { User } = require('../../models');

// Signup route
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.redirect('/'); // Redirect to the home page after successful signup and login
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Login route
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res.status(400).json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.redirect('/dashboard'); // Redirect user to the dashboard
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// Logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.redirect('/');
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
