const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('home', { 
      posts, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single post detail view with 'ownComment' flag for comments
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      // Add an 'ownComment' flag to each comment
      post.comments.forEach(comment => {
        comment.ownComment = req.session.userId === comment.userId; // Set to true if the comment's userId matches the logged-in user's id
      });

      res.render('single-post', { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard route to view user's posts with edit options
router.get('/dashboard', withAuth, async (req, res) => {
  try {
      const userPosts = await Post.findAll({
          where: { userId: req.session.userId },
          include: [{ model: Comment, include: [User] }, { model: User }],
      });
      const posts = userPosts.map((post) => post.get({ plain: true }));

      res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
      res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

module.exports = router;
