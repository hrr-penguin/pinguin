
module.exports = {
  getFeed: function(req, res) {
    console.log("success server get req.param", req.param);
  },

  signUp: function(req, res) {
    console.log("success server post req.body", req.body);
    passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/api/signup'
    });
  },

  signIn: function(req, res) {
    passport.authenticate('local-signin', {
      successRedirect: '/',
      failureRedirect: '/api/signin'
    });
  },

  signOut: function(req, res) {
    // ..
  }
}