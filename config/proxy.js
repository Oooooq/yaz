const proxyConfig = {
  target: 'https://api.example.com',
  changeOrigin: true,
  timeout: 5000,
  onProxyRes: function(proxyRes, req, res) {
    // Optionally modify proxy responses here
  },
  onError: function(err, req, res) {
    res.status(500).send('Proxy error');
  }
};

module.exports = proxyConfig;
