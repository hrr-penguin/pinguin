const passport = require('passport');
const helper = require('./../helpers/helpers')

module.exports = function(app, express) {
  app.get('/api/feed', helper.getFeed);
  app.post('/api/signup', helper.signUp);
  app.post('/api/signin', helper.signIn);
  app.get('/api/signout', helper.signOut);
};
