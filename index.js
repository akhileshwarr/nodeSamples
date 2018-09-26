/* eslint-disable no-console */
const http = require('http');
// const fs = require('fs');
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;
const routes = require('./routes')

app.get('/readfile',routes.readFromFile)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
