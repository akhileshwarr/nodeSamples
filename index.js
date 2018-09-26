/* eslint-disable no-console */
// const fs = require('fs');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const multer = require('multer');

const upload = multer({
  dest: 'multer/', // this saves your file into a directory called "uploads"
});
const hostname = '127.0.0.1';
const port = 3001;
const routes = require('./routes');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.get('/readfile', routes.readFromFile);
app.get('/product/:a/:b', routes.product);
app.post('/writefile', upload.single('test'), routes.writefile);
app.get('/stringreg', routes.stringext);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

module.exports = app;
