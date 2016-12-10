const express = require('express');

const app = express();

require('./config/middleware')(app, express);

app.listen(8000);

module.exports = app;
