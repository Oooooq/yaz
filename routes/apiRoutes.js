const express = require('express');
const request = require('request');
const proxyConfig = require('../config/proxy');

const router = express.Router();

router.get('/external', (req, res) => {
  request({ url: proxyConfig.target, method: 'GET' }, (error, response, body) => {
    if (error) {
      return res.status(500).send('External API request failed');
    }
    res.send(body);
  });
});

module.exports = router;
