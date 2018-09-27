module.exports = (req, res) => {
  console.log(req.query.name);
  const arr = req.query.name.toLowerCase().split('');
  let result = '';
  let count;
  for (let i = 0; i < arr.length; i += 1) {
    count = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      result = arr[i];
      break;
    }
  }
  result = result || 'none';
  const mime = req.headers.accepts || 'text/html';
  res.writeHead(200, { 'Content-Type': mime });
  res.write(`found ${result}`);
  res.end();
};
