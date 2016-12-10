var passport = require('passport');

module.exports = {
  getFeed: function(req, res) {
    console.log("success server get req.param", req.param);
  },

  signUp: function(req, res) {
    console.log("success server post req.body", req.body);
    passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/api/signin',
      failureFlash: 'true'
    });
  },

  signIn: function(req, res) {
    passport.authenticate('local-signin', {
      successRedirect: '/',
      failureRedirect: '/api/signin',
      failureFlash: 'true'
    });
  },

  signOut: function(req, res) {
    // ..
  }
}