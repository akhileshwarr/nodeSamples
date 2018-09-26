
module.exports = (req,res)=>{
  console.log(Object.keys(req.body));
  let prod = req.params.a*req.params.b
      mime = req.headers.accepts || 'text/html'
      res.writeHead(200, {'Content-Type': mime});
      res.write(prod.toString());
      res.end();
    }
