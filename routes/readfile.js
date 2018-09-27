const parser = require('url');
const pathmodule = require('path');
const fs = require('fs');

const appDir = pathmodule.dirname(require.main.filename);

module.exports = (req, res) => {
  console.log(parser.parse(req.url, true));
  const url = parser.parse(req.url, true);
  const path = `${appDir}\\${url.query.file}`;
  console.log(path);
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`No route registered for ${url.pathname}`);
      res.end();
    } else {
      const mime = req.headers.accepts || 'text/html';
      res.writeHead(200, { 'Content-Type': mime });
      res.write(data);
      res.end();
    }
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
  });
};
