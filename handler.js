const Handler = function (method) {
  this.process = function (req, res) {
    const params = null;
    return method.apply(this, [req, res, params]);
  };
};

exports.createHandler = function (method) {
  return new Handler(method);
};
