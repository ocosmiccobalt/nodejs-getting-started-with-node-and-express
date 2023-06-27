const express = require('express');

const app = express();

app.get('/currenttime', (req, res) => {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
}); // localhost:3000/currenttime

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
}); // localhost:3000/

app.listen(3000);

// const http = require('http');

// function handleRequest(request, response) {
//   if (request.url === '/currenttime') {
//     response.statusCode = 200;
//     response.end('<h1>' + new Date().toISOString() + '</h1>');
//   } else if (request.url === '/') {
//     response.statusCode = 200;
//     response.end('<h1>Hello World!</h1>');
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);
