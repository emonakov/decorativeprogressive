const { createProxyMiddleware } = require('http-proxy-middleware'); // eslint-disable-line

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};
