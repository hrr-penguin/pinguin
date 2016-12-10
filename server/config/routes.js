const helper = require('./../helpers/helpers')

module.exports = function(app, express, passport) {
  app.get('/api/feed', helper.getFeed);
  app.post('/api/signup', helper.signUp);
  app.post('/api/signin', helper.signIn);
  app.get('/api/signout', helper.signOut);
};
