const { Task, User } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
  addTask: async (content, token) => {
    const { data: { email, password } } = jwt.decode(token);
    
    const { dataValues: { id } } = await User.findOne({
      where: { email, password },
      attributes: { exclude: ['password'] },
    });

    const { dataValues: { id: taskId, status } } = await Task.create({ content, userId: id });
    
    return { id: taskId, content, status };
  },

  updateTask: async (taskId, type, update) => {
    if (type === 'status') {
      await Task.update({ status: update }, { where: { id: taskId } });
    } else {
      await Task.update({ content: update }, { where: { id: taskId } });
    }
  },

  deleteTask: async (id) => {
    await Task.destroy({
      where: { id }
    });
  }
};
