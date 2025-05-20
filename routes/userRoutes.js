const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.get('/', authenticate, (req, res) => {
  res.send('User route is secure');
});

router.post('/login', (req, res) => {
  // Placeholder for login logic
  res.send('Login successful');
});

module.exports = router;
