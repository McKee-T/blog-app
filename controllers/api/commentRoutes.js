const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.session.userId, // Ensure this matches your Comment model
      });
      res.redirect('back'); // Redirects user back to the same page
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Delete a comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.findOne({ where: { id: req.params.id } });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      // Check if the comment belongs to the current user
      if (commentData.userId !== req.session.userId) {
        res.status(403).json({ message: 'You can only delete your own comments!' });
        return;
      }
  
      await commentData.destroy();
      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
