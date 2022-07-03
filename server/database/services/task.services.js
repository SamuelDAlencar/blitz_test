const { Task, User } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
  addTask: async (content, token) => {
    const { data: { email, password } } = jwt.decode(token);
    
    const { dataValues: { id } } = await User.findOne({
      where: { email, password },
      attributes: { exclude: ['password'] },
    });
    
    return await Task.create({ content, userId: id });
  },

  updateTask: async (taskId, type, update) => {
    if (type === 'status') {
      await Task.update({ status: update }, { where: { id: taskId } });
    } else {
      await Task.update({ content: update }, { where: { id: taskId } });
    }
  },

  deleteTask: async (id) => {
    const taskExists = await Task.findOne({ where: { id } });

    if (!taskExists) {
      const error = {
        message: 'this task does not exists',
        status: 404,
      };

      throw error;
    }

    await Task.destroy({
      where: { id }
    });
  },
};
