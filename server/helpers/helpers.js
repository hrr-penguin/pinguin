module.exports = {
  getFeed: function(req, res) {
    console.log("success server get req.param", req.param);
  },

  signUp: function(req, res) {
    console.log("success server post req.body", req.body);
  },

  signIn: function(req, res) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/api/signin',
      failureFlash: 'true'
    });
  },

  signOut: function(req, res) {
    // ..
  }
}