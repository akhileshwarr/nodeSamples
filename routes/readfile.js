const parser = require('url'),
 path = require('path'),
 fs = require('fs');

const appDir = path.dirname(require.main.filename);

module.exports = (req,res)=>{
  console.log(parser.parse(req.url, true));
var url = parser.parse(req.url, true);
  var path = appDir + "\\" + url.query.file
  console.log(path);
  fs.readFile(path, (err, data) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("No route registered for " + url.pathname);
      res.end();
    }else {
      mime = req.headers.accepts || 'text/html'
      res.writeHead(200, {'Content-Type': mime});
      res.write(data);
      res.end();
    }
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
});

}
