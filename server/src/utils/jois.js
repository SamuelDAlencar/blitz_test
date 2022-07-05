const Joi = require('joi');

module.exports = {
  loginJoi: (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },

  signUpJoi: (data) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
  },

  addTaskJoi: (data) => {
    const schema = Joi.object({
      content: Joi.string().required()
    });

    return schema.validate(data);
  },

  editTaskJoi: (data) => {
    const schema = Joi.object({
      type: Joi.string().valid('status', 'content').required(),
      update: Joi.string().required()
    });

    return schema.validate(data);
  }
};