const express = require('express');
const { StatusCodes: { OK } } = require('http-status-codes');
const router = express.Router();

router.use('/', (req, res) => {
  return res.status(OK).json({
    message: 'successfully accessed the main router'
  });
});

module.exports = router;
