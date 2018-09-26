module.exports = (req,res)=>{
  console.log(req.query.name);
  var arr = req.query.name.toLowerCase().split('');
  var result = '';
  var count
  for (var i = 0; i < arr.length; i++) {
     count = 0;
      for (var j = 0; j < arr.length; j++)
      {
        if (arr[i] === arr[j]) {
          count++
        }
      }
      if (count == 1) {
        result = arr[i];
        break;
      }
  }
  result = result || "none"
  mime = req.headers.accepts || 'text/html'
  res.writeHead(200, {'Content-Type': mime});
  res.write("found "+result );
  res.end();

}
