require('dotenv').config();
const express = require('express');
const app = express();
const mainRouter = require('./routes');
const PORT = process.env.API_PORT;
const { StatusCodes: { OK } } = require('http-status-codes');

app.use(express.json());

app.use(mainRouter);

app.get('/', (_req, res) => res.status(OK).json({
  message: 'main api route'
}));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
