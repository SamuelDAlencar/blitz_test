const express = require('express');
const { logIn, signUp } = require('../../database/controllers/user.controllers');
const { validateLogin, validateSignUp } = require('../../middlewares');

const router = express.Router();

router.post('/', validateSignUp, signUp);
router.get('/', validateLogin, logIn);

module.exports = router;
