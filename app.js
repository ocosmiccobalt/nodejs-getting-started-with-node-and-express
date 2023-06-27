const express = require('express');

const app = express();

app.get('/currenttime', (req, res) => {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
}); // localhost:3000/currenttime

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
}); // localhost:3000/

app.listen(3000);
