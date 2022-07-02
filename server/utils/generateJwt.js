const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
};

module.exports = (payload) => {
  const token = jwt.sign({ data: payload }, SECRET, jwtConfig);

  return token;
};
