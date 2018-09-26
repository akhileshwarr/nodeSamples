/* eslint-disable no-console */
const http = require('http');
// const fs = require('fs');
const router = require('./router');

const hostname = '127.0.0.1';
const port = 3000;

router.register('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
});

const server = http.createServer((req, res) => {
  console.log(process.argv);
  const handler = router.route(req);
  handler.process(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = server;
