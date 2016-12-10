const passport = require('passport');

module.exports = function(app, express) {
  app.get('/api/feed', () => {});
  app.post('/api/signup', () => {});
  app.post('/api/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/signin',
    failureFlash: 'true'
  }));
  app.get('/api/signout', () => {});
};
