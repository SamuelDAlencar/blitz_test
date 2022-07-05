const jwt = require('jsonwebtoken');

const { User } = require('../database/models');
const { SECRET } = process.env;
const {
  editTaskJoi,
  addTaskJoi,
  loginJoi,
  signUpJoi
} = require('../utils/jois');

module.exports = {
  validateAccess: async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401)
        .json({ message: 'token not found' });
    }

    const {
      data: { email, password }
    } = jwt.verify(authorization, SECRET);

    const userExists = await User.findOne({
      where: { email, password },
      attributes: { exclude: ['password'] },
    });

    if (!userExists) {
      return res.status(401)
        .json({ message: 'expired or invalid token' });
    }

    next();
  },

  validateSignUp: async (req, res, next) => {
    const { email } = req.body;

    const { error } = signUpJoi(req.body);
    const valid = error == null;

    const userExists = await User.findOne({
      where: { email },
    });

    if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    if (userExists) {
      return res.status(409).json({ message: 'user already registered' });
    }

    if (valid && !userExists) {
      next();
    }
  },

  validateLogin: async (req, res, next) => {
    const { error } = loginJoi(req.body);
    const valid = error == null;

    if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    const { email, password } = req.body;

    const userExists = await User.findOne({
      where: { email, password },
    });

    if (!userExists) {
      return res.status(400).json({ message: 'invalid fields' });
    }

    if (valid && userExists) {
      next();
    }
  },

  validateTaskAdd: async (req, res, next) => {
    const { error } = addTaskJoi(req.body);
    const valid = error == null;

    if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    next();
  },

  validTaskUpdate: async (req, res, next) => {
    const { error } = editTaskJoi(req.body);
    const valid = error == null;

    if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    next();
  },
};
