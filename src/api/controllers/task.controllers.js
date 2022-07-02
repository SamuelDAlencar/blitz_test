const taskServices = require('../services/task.services');

module.exports = {
  addTask: async (req, res) => {
    const { authorization } = req.headers;
    const { content } = req.body;

    taskServices.addTask(content, authorization);

    return res.status(201).json({ content });
  },

  editTask: async () => {

  },

  updateTask: async () => {

  },

  deleteTask: async () => {

  },
};
