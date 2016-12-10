const LocalStrategy = require('passport-local').Strategy;
const Models = require('../models/models.js');

module.exports = function(passport) {
  passport.use('local-signin', new LocalStrategy(function(username, password, done) {
    Models.users.get(username, function(err, result) {
      console.log('Inside login result: ', result);
      if (err) { return done(err); }
      if (!result[0]) {
        console.log('no account found');
        return done(null, false);
      }
      if (!(Models.users.checkPassword(password, result[0].password))) {
        console.log('wrong password', result[0].password);
        return done(null, false);
      }
      console.log('signin complete!');
      return done(null, result);
    });
  }));

  passport.use('local-signup', new LocalStrategy(function(username, password, done) {
    Models.users.get(username, function(err, rows) {
      if (err) {
        return done(err); }
      if (rows[0]) {
        return done(null, false);
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
