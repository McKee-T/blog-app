const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post and redirect to the dashboard
router.post('/', withAuth, async (req, res) => {
    try {
      // Ensure the fields match your Post model's expectations
      const { title, content } = req.body;
      
      if (!title || !content) {
        // Optionally, send a more descriptive error if title or content is missing
        return res.status(400).json({ message: "Title and content are required." });
      }
  
      const newPost = await Post.create({
        title,
        content,
        userId: req.session.userId, // Assuming your Post model has a userId field
      });
  
      res.redirect('/dashboard'); // Redirect to the dashboard after successful post creation
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

// Update a post - Ensure only the owner can update
router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({ where: { id: req.params.id } });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    if (postData.userId !== req.session.userId) {
      res.status(403).json({ message: 'You can only edit your own posts!' });
      return;
    }

    await postData.update(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post - Ensure only the owner can delete
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({ where: { id: req.params.id } });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    if (postData.userId !== req.session.userId) {
      res.status(403).json({ message: 'You can only delete your own posts!' });
      return;
    }

    await postData.destroy();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
