const express = require('express');
const userRoutes = require('./userRoutes');
const apiRoutes = require('./apiRoutes');
const router = express.Router();

router.use('/user', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;
