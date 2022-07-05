const express = require('express');
const cors = require('cors');

const app = express();
const mainRouter = require('./routes');
const { PORT } = process.env;

app.use(express.json());
app.use(cors());

app.use(mainRouter);

app.use((err, _req, res, _next) => {
  console.error(err.stack);

  return res.status(500).send('internal error on server side');
});

app.listen(PORT, () => console.log(`App running on port ${PORT}, access 'http://localhost:3001/'`));
