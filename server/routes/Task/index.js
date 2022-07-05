const express = require('express');
const { addTask, updateTask, deleteTask, getTasksByUID } = require('../../database/controllers/task.controllers');
const { deleteAllTasks } = require('../../database/services/task.services');
const { validateAccess, validateTaskAdd, validTaskUpdate } = require('../../middlewares');

const router = express.Router();

router.post('/', validateAccess, validateTaskAdd, addTask);
router.put('/:id', validateAccess, validTaskUpdate, updateTask);
router.delete('/:id', validateAccess, deleteTask);
router.delete('/', validateAccess, deleteAllTasks);
router.get('/:id', validateAccess, getTasksByUID);

module.exports = router;
