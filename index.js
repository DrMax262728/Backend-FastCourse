const http = require('http');

const server = http.createServer((request, response) => {
  response.end('<h1>Hello Node.js!!!</h1>');
});

server.listen(3131, () => {
  console.log('Server has been started...');
});