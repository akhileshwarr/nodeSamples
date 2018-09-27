
module.exports = (req, res) => {
  console.log(Object.keys(req.body));
  const prod = req.params.a * req.params.b;
  const mime = req.headers.accepts || 'text/html';
  res.writeHead(200, { 'Content-Type': mime });
  res.write(prod.toString());
  res.end();
};
