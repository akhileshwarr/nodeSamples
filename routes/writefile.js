const path = require('path');


const fs = require('fs');

const appDir = path.dirname(require.main.filename);

module.exports = (req, res) => {
  console.log(path.dirname(req.file.path));
  fs.readFile(req.file.path, (err, data) => {
    fs.writeFile(`${appDir}/downloads/${req.file.originalname}`, data, () => {
      const mime = req.headers.accepts || 'text/html';
      res.writeHead(200, { 'Content-Type': mime });
      res.write('copied!');
      res.end();
    });
  });
};
