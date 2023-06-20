// Require router method
const router = require('express').Router();

// Require API and dashboard routes
const apiRoutes = require('./api');
const dashRoutes = require('./dashRoutes');

// Setup endpoints & correspoinding files
router.use('/', dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;