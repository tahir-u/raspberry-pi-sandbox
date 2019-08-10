const http = require('http');

const HOSTNAME = 'localhost';
const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world\n');
});

server.listen(PORT, HOSTNAME, function () {
  console.log(`server running at ${HOSTNAME} on port ${PORT}`);
});