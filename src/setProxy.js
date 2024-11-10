const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware ({
        target: 'http://34.64.202.47:8080' ,
        changeOrigin: true,
        })
    );
};