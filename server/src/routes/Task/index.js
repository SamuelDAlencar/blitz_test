const express = require('express');

const { addTask, updateTask, deleteTask } = require('../../database/controllers/task.controllers');
const { validateAccess, validateTaskAdd, validTaskUpdate } = require('../../middlewares');

const router = express.Router();

router.post('/', validateAccess, validateTaskAdd, addTask);
router.put('/:id', validateAccess, validTaskUpdate, updateTask);
router.delete('/:id', validateAccess, deleteTask);

module.exports = router;
