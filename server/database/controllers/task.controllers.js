const taskServices = require('../services/task.services');

module.exports = {
  addTask: async (req, res) => {
    const { content } = req.body;
    const token = req.headers.authorization;

    await taskServices.addTask(content, token);

    return res.status(201).json({ message: 'task created successfully' });
  },

  updateTask: async (req, res) => {
    const { id, type, update } = req.body;

    await taskServices.updateTask(id, type, update);

    return res.status(200).json({ message: 'task updated successfully' });
  },

  deleteTask: async (req, res) => {
    try {
      const { id } = req.params;
  
      await taskServices.deleteTask(id);
  
      return res.status(204).json();
    } catch (error) {
      const { status, message } = error;

      return res.status(status).json({ message });
    }
  },

  getTasksByUID: async (req, res) => {
    const tasks = taskServices.getTasksByUID(req.params);

    return res.status(200).json(tasks);
  }
};
