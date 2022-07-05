const express = require('express');

const router = express.Router();
const userRouter = require('./User');
const taskRouter = require('./Task');

router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;
