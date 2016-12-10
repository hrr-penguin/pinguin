const express = require('express');
const db = require('./db/db.js');
const app = express();

require('./config/middleware')(app, express);
require('./config/routes')(app, express);

app.listen(8000);

console.log('Listening on localhost:8000');

module.exports = app;
