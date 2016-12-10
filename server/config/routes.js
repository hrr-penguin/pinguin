const helper = require('./../helpers/helpers')

module.exports = function(app, express, passport) {
  app.get('/api/feed', helper.getFeed);
  app.post('/api/signup', passport.authenticate('local-signup', {
      successRedirect: '/#/',
      failureRedirect: '/#/signup'
    }));
  app.post('/api/signin', passport.authenticate('local-signin', {
      successRedirect: '/#/',
      failureRedirect: '/#/signin'
    }));
  app.get('/api/signout', helper.signOut);
};
