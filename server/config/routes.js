const passport = require('passport');

module.exports = function(app, express) {
  app.get('/api/feed', (req,res) => {console.log("success server get req.param", req.param)});
  app.post('/api/signup', (req,res) => {console.log("success server post req.body", req.body)});
  app.post('/api/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/signin',
    failureFlash: 'true'
  }));
  app.get('/api/signout', () => {});
};
