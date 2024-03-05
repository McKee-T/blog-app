const router = require('express').Router();
const apiRoutes = require('./api'); // Importing API routes
const homeRoutes = require('./homeRoutes'); // Importing other routes


router.use('/api', apiRoutes); // Setting up API routes
router.use('/', homeRoutes); // Setting up other routes

module.exports = router;
