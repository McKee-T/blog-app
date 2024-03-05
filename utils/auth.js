// utils/auth.js

const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect them to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, execute the next middleware function
      next();
    }
  };
  
  module.exports = withAuth;
  