const taskServices = require('../services/task.services');

module.exports = {
  addTask: async (req, res) => {
    const { content } = req.body;
    const token = req.headers.authorization;

    const data = await taskServices.addTask(content, token);

    return res.status(201).json({ message: 'task created successfully', data });
  },

  updateTask: async (req, res) => {
    const { type, update } = req.body;
    const { id } = req.params;

    await taskServices.updateTask(id, type, update);

    return res.status(200).json({ message: 'task updated successfully' });
  },

  deleteTask: async (req, res) => {
    const { id } = req.params;

    await taskServices.deleteTask(id);

    return res.status(204).json();
  }
};
