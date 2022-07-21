const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const public = path.join(__dirname, 'public');

app.use(express.static(public));

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});