
const { User } = require('../models');
const generateJwt = require('../../utils/generateJwt');

module.exports = {
  signUp: async (username, email, password) => {
    const token = generateJwt({ email, password });

    await User.create({ username, email, password });

    return token;
  },

  logIn: async (email, password) => {
    const token = generateJwt({ email, password });

    return token;
  },

  getByEmail: async (email) => {
    const user = await User.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });

    return user;
  }
};
