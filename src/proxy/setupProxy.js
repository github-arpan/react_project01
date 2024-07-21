const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.831457&lng=91.2867777&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      changeOrigin: true,
    })
  );
};
