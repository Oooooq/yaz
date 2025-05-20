const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxyConfig = require('../config/proxy');
const router = express.Router();

router.use('/external', createProxyMiddleware(proxyConfig));

module.exports = router;
