const fs = require('fs');
const sys = require('sys');
const parser = require('url');
const handlerFactory = require('./handler');

let handlers = {};

exports.clear = function () {
  handlers = {};
};

exports.register = function (url, method) {
  handlers[url] = handlerFactory.createHandler(method);
};

exports.route = function (req) {
  url = parser.parse(req.url, true);
  let handler = handlers[url.pathname];
  if (!handler) handler = this.missing(req);
  return handler;
};

exports.missing = function (req) {
  // Try to read the file locally, this is a security hole, yo /../../etc/passwd
  const url = parser.parse(req.url, true);
  console.log(url);
  const path = `${__dirname}/${url.pathname}`;
  try {
    if (req.method != 'GET') { throw Error('No route registered'); }
    data = fs.readFileSync(path);
    mime = req.headers.accepts || 'text/html';
    return handlerFactory.createHandler((req, res) => {
      res.writeHead(200, { 'Content-Type': mime });
      res.write(data);
      res.end();
    });
  } catch (e) {
    return handlerFactory.createHandler((req, res) => {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`No route registered for ${url.pathname}`);
      res.end();
    });
  }
};
