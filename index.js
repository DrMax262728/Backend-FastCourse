const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {

  // if (request.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //
  //     response.writeHead(200, {
  //       'Content-type': 'text/html'
  //     });
  //
  //     response.end(data);
  //   })
  // } else if (request.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //
  //     response.writeHead(200, {
  //       'Content-type': 'text/html'
  //     });
  //
  //     response.end(data);
  //   })
  // }

  let filePath = path.join(__dirname, 'pubic', request.url === '/' ? 'index.html' : request.url );

  console.log(filePath);

  fs.readFile(filePath, (err, data) => {
    if(err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          response.writeHead(500);
          response.end('Error!');
        } else {
          response.writeHead(200, {
            'Content-type': 'text/html'
          })
        }
      })
    }
  });

  response.end();
});

server.listen(3131, () => {
  console.log('Server has been started...');
});