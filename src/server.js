const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const public = path.join(__dirname, 'public');
