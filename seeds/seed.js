const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // WARNING: This will DROP your database tables and recreate them

  // Seed Users
  await User.bulkCreate([
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'password123' }
    // Add more users as needed
  ]);

  // Seed Posts
  await Post.bulkCreate([
    { title: 'First Post', content: 'This is the first post.', userId: 1 },
    { title: 'Second Post', content: 'This is the second post.', userId: 2 }
    // Add more posts as needed
  ]);

  // Seed Comments
  await Comment.bulkCreate([
    { commentText: 'Great post!', userId: 2, postId: 1 },
    { commentText: 'Thanks for sharing.', userId: 1, postId: 2 }
    // Add more comments as needed
  ]);

  process.exit(0); // Exit the process when done
};

seedDatabase();
