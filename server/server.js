const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(8000);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/compile/'));

module.exports = app;
