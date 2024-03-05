const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); 

  // Seed Users
  await User.bulkCreate([
    { username: 'MRVNx', password: 'password123' },
    { username: 'SneezingTurtle', password: 'password123' }
   
  ]);

  // Seed Posts
  await Post.bulkCreate([
    { title: 'Welcome!', content: 'Hello everyone, and welcome to MyFirstBlog!  Im excited to get this website up and running, and I hope you find it as useful as I do.', userId: 1 },
    { title: 'Howdy yall!', content: 'Im new here and wanted to test out the post functionality of the website.  Hopefully this will show up so I know I am doing this right.', userId: 2 }

  ]);

  // Seed Comments
  await Comment.bulkCreate([
    { commentText: 'The site looks great, good job!', userId: 2, postId: 1 },
    { commentText: 'We can see it, so you did something right!', userId: 1, postId: 2 }
    
  ]);

  process.exit(0); 
};

seedDatabase();
