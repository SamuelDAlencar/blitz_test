
const { User } = require('../models');
const generateJwt = require('../../utils/generateJwt');

module.exports = {
  signUp: async (username, email, password) => {
    const user = await User.findOne({
      where: { email, password },
      attributes: { exclude: ['password'] },
    });

    if (user) {
      const error = {
        status: 208,
        message: 'User already exists',
      };

      throw error;
    }

    const token = generateJwt({ email, password });

    await User.create({ username, email, password });

    return token;
  },

  logIn: async (email, password) => {
    const user = await User.findOne({
      where: { email, password },
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      const error = {
        status: 404,
        message: 'User does not exist or the password is incorrect',
      };

      throw error;
    }

    const token = generateJwt({ email, password });
    return token;
  }
};
