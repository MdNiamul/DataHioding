// server.js

// const express = require('express');
// const app = express();
// const port = 3000;

// Sample IPs and Ports
// const ipsAndPorts = [
//   { ip: '103.181.168.249', port: '8080' },
//   { ip: '45.236.171.4', port: '8080' },
//   { ip: '92.255.174.56', port: '8080' },
//   { ip: '181.129.183.19', port: '53281' },
//   { ip: '103.240.161.101', port: '6666' },
//   { ip: '190.61.88.147', port: '999' },
//   { ip: '179.43.92.226', port: '8080' },
//   { ip: '185.82.99.250', port: '8080' },
//   { ip: '103.146.19.142', port: '3125' },
//   { ip: '138.117.229.93', port: '999' }
// ];

// // API endpoint that returns IPs and Ports
// app.get('/get-ips', (req, res) => {
//   res.json({ ips: ipsAndPorts });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());

// Serve static HTML (optional)
app.use(express.static(__dirname));

app.get("/proxy", (req, res, next) => {
  const targetIP = req.query.ip;
  if (!targetIP) return res.status(400).send("Missing IP");

  const proxy = createProxyMiddleware({
    target: `http://${targetIP}`,
    changeOrigin: true,
    selfHandleResponse: false,
    onProxyReq: (proxyReq, req, res) => {
      console.log(`Proxying to: http://${targetIP}`);
    },
  });

  proxy(req, res, next);
});

app.listen(3000, () => {
  console.log("✅ Proxy server running on http://localhost:3000");
});
