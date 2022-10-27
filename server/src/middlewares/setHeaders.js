function setHeaders(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, token'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE, PATCH'
  );
  next();
}

module.exports = setHeaders;
