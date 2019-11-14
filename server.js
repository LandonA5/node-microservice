'use strict';
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  res.send('Got new data');
});

app.post('/', (req, res) => {
  res.send('Posted new data');
});

app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);
