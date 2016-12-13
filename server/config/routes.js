const helper = require('./../helpers/helpers');
const passport = require('passport');

module.exports = function(app, express) {
  app.get('/api/feed', loggedIn, helper.getFeed);
  app.post('/api/feed', loggedIn, helper.postFeed);
  app.post('/api/signup', passport.authenticate('local-signup'), helper.signUp);
  app.post('/api/signin', passport.authenticate('local-signin'), helper.signIn);
  app.get('/api/signout', loggedIn, helper.signOut);

  app.get('/api/comment', loggedIn, helper.getComments);
  app.post('/api/comment', loggedIn, helper.postComment);
};

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}