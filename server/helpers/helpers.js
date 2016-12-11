const Models = require('../dbConfig/models/models.js');

module.exports = {
  getFeed: function(req, res) {
    // TODO: send in user id instead of the hard coded 1.
    Models.feeds.get(1, function(err, results) {
      if (err) {
        console.log('helpers.getFeed error: ', error);
      } else {
        res.json({ urls: results.map(item => item.uri) });
      }
    })
  },

  postFeed: function(req, res) {
    // TODO: send in user id instead of the hard coded 1.
    Models.feeds.post(1, req.body.url, function(err, results) {
      if (err) {
        console.log('helpers.postFeed error: ', err);
      } else {
        console.log(results);
        res.sendStatus(201);
      }
    });
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