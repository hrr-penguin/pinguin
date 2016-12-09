const express = require('express');
const morgran = require('morgan');

const app = express();

app.listen(8000);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));

module.exports = app;
