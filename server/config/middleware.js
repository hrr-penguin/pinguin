const morgan = require('morgan');
const bodyParse = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(app, express) {

  app.use(morgan('dev'));

  app.use(require('express-session')({
    secret: 'secrets',
    resave: false,
    saveUnitiliazed: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(__dirname + '/../client/public/'));

};
