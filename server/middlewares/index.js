const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { EMPTY_FIELD_ERROR } = process.env;
const { SECRET } = process.env;

// --- Joi validation schemas

const loginJoi = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': EMPTY_FIELD_ERROR,
      'string.empty': EMPTY_FIELD_ERROR,
    }),
    password: Joi.string().required().messages({
      'any.required': EMPTY_FIELD_ERROR,
      'string.empty': EMPTY_FIELD_ERROR,
    }),
  });

  return schema.validate(data);
};

const signUpJoi = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const addTaskJoi = (data) => {
  const schema = Joi.object({
    content: Joi.string().required()
  });

  return schema.validate(data);
};

const editTaskJoi = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    type: Joi.string().valid('status', 'content').required(),
    update: Joi.string().required()
  });

  return schema.validate(data);
};

// --------------------------

module.exports = {
  validateAccess: async (req, res, next) => {
    try {
      const { authorization } = req.headers;
    
      if (!authorization) {
        return res.status(401).json({ message: 'token not found' });
      }

      const { data: { email, password } } = jwt
        .verify(authorization, SECRET);

      const userExists = await User.findOne({
        where: { email, password },
        attributes: { exclude: ['password'] },
      });
  
      if (!userExists) {
        return res.status(401)
          .json({ message: 'expired or invalid token' });
      }      

      next();
    } catch (error) {
      console.log(error.message);

      return res.status(401)
        .json({ message: 'expired or invalid token' });
    }
  },

  validateSignUp: async (req, res, next) => {
    const { error } = signUpJoi(req.body);
    const valid = error == null;
    const { email } = req.body;

    const userExists = await User.findOne({
      where: { email },
    });

    if (valid && !userExists) {
      next();
    } else if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    if (userExists) {
      return res.status(409).json({ message: 'user already registered' });
    }
  },

  validateLogin: async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'missing fields' });
    }

    const { error } = loginJoi(req.body);
    const valid = error == null;

    const userExists = await User.findOne({
      where: { email, password },
    });

    if (valid && userExists) {
      next();
    } else if (!valid) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      return res.status(400).json({ message });
    }

    if (!userExists) {
      return res.status(400).json({ message: 'invalid fields' });
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
