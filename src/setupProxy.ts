const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/oauth', {
      target: 'https://account.uipath.com',
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/Jobs', {
      target: 'https://cloud.uipath.com/ncyzdol/DefaultTenant/odata',
      changeOrigin: true,
    })
  );
};
