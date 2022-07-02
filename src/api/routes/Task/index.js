const express = require('express');
const { addTask, editTask,
  // updateTask,
  deleteTask } = require('../../controllers/task.controllers');

const router = express.Router();

router.post('/', addTask);
router.put('/', editTask);
// router.put('/', updateTask);
router.delete('/', deleteTask);

module.exports = router;
