const express = require('express');
const { logIn, signUp } = require('../../database/controllers/user.controllers');
const { validateLogin, validateSignUp } = require('../../middlewares');

const router = express.Router();

router.post('/signup', validateSignUp, signUp);
router.post('/login', validateLogin, logIn);

module.exports = router;
