const express = require('express');
const config = require('../config/default');
const helloRouter = require('../routes/hello');

const app = express();

app.use('/', helloRouter);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
