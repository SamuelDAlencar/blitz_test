const express = require('express');
const { addTask, updateTask, deleteTask } = require('../../database/controllers/task.controllers');
const { validateAccess } = require('../../middlewares');

const router = express.Router();

router.post('/', validateAccess, addTask);
router.put('/', validateAccess, updateTask);
router.delete('/', validateAccess, deleteTask);

module.exports = router;
