const db = require('../db/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const LocalStrategy = require('passport-local').Strategy;
const Models = require('../models/models.js');

module.exports = function(passport) {
  passport.use('local-signin', new LocalStrategy(function(username, password, done) {
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

  passport.use('local-signup', new LocalStrategy(function(username, password, done) {
    Models.users.get(username, function(err, result) {
      console.log('username: ', username );
      if (err) { return done(err); }
      if (result) {
        return done(null, false, {message: 'Account already exist'});
      } else {
        Models.users.post(username, password, function(err, results) {
          if (err) {
            console.error(err);
          }
          console.log('Account added');
        });
      }
    });
  }));

}
