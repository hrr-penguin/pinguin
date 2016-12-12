const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Models = require('../models/models.js');
const db = require('../db/db.js');
const config = require('./config.js');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(cookieParser('secrets'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client/public/'));


  app.use(require('express-session')({
    secret: 'secrets',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 2419200000  // 28 days
    }
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.query('select * from users where id = ?', [id], function(err, result) {
      done(err, result[0]);
    });
  });

  passport.use('local-signin', new LocalStrategy(function(username, password, done) {
    Models.users.get(username, function(err, result) {
      console.log('Inside login result: ', result);
      if (err) { return done(err); }
      if (!result.length) {
        console.log('no account found');
        return done(null, false);
      }
      if (!(Models.users.checkPassword(password, result[0].password))) {
        console.log('wrong password', password);
        return done(null, false);
      }
      console.log('signin complete!');
      return done(null, result[0]);
    });
  }));

  passport.use('local-signup', new LocalStrategy(function(username, password, done) {
    Models.users.get(username, function(err, rows) {
      if (err) { return done(err); }
      if (rows[0]) {
        return done(null, false);
      } else {
        var newUser = new Object();
        newUser.username = username;
        newUser.password = password;
        Models.users.post(username, password, function(err, results) {
          console.log(results);
          if (err) {
            console.error(err);
          }
          console.log('Account added');
          newUser.id = results.insertId;
          console.log(newUser);
          return done(null, newUser);
        });
      }
    });
  }));

  passport.use('google', new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/api/google/return'
  }, function(accessToken, redreshToken, profile, done) {
    console.log('PROFILE', profile);
    console.log('EMAIL', profile.emails[0].value);
    Models.users.get(profile.emails[0].value, function(err, results) {
      if (err) { return done(err); }
      if (!results.length) {
        let user = {};
        user.username = profile.emails[0].value;
        user.password = profile.id;
        Models.users.post(profile.emails[0].value, profile.id, function(err, results) {
          if (err) { console.error(err); }
          user.id = results.insertId;
          return done(null, user);
        });
      }
      return done(null, results[0]);
    });
  }));

};
