const http = require('http');
const { createReadStream } = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const filename = 'index.html';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  createReadStream(filename).pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
