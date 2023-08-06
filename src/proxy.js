const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Replace 'https://abhijeetlima-production.up.railway.app' with your actual API server URL
const apiProxy = createProxyMiddleware({
  target: "https://abhijeetlima-production.up.railway.app",
  changeOrigin: true,
});

// Mount the proxy middleware to intercept requests to '/employee' and forward them to the API server
app.use("/employee", apiProxy);

// Start the proxy server on a port of your choice (e.g., 3001)
const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
