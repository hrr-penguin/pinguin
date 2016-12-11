const express = require('express');
const app = express();
// const passport = require('passport');

require('./config/middleware')(app, express);
// require('./config/passport')(passport);
require('./config/routes')(app, express);


app.listen(8000);

console.log('Listening on localhost:8000');

module.exports = app;
