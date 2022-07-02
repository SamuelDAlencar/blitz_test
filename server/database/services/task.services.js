const { Task, User } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
  addTask: async (content, token) => {
    const { data: { email, password } } = jwt.decode(token);
    
    const { dataValues: { id } } = await User.findOne({
      where: { email, password },
      attributes: { exclude: ['password'] },
    });
    
    await Task.create({ content, userId: id });
  },

  updateTask: async (id, type, update) => {
    if (type === 'status') {
      await Task.update({ status: update }, { where: { id } });
    } else {
      await Task.update({ content: update }, { where: { id } });
    }
  },

  deleteTask: async () => {

  },
};
