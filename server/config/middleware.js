const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Models = require('../dbConfig/models/models.js');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client/public/'));


  app.use(require('express-session')({
    secret: 'secrets',
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  // TODO: install connect-flash for flash messages
  passport.use(new LocalStrategy(function(username, password, done) {
    Models.users.get(username, function(err, result) {
      if (err) { return done(err); }
      if (!result) {
        return done(null, false, {message: 'Account does not exist'});
      }
      if (result.password !== password) {
        return done(null, false, {message: 'Incorrect password'});
      }
      return done(null, result);
    });
  }));

};
