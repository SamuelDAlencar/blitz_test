const express = require('express');
const { logIn, signUp } = require('../../controllers/user.controllers');

const router = express.Router();

router.post('/', signUp);
router.get('/', logIn);

module.exports = router;
