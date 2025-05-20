const config = require('./index');

const proxyConfig = {
  target: 'https://api.example.com',
  changeOrigin: true,
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy Error');
  }
};

module.exports = proxyConfig;
