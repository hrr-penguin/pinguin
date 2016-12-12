const Models = require('../models/models.js');

module.exports = {
  getFeed: function(req, res) {
    Models.feeds.get(req.session.passport.user, function(err, results) {
      if (err) {
        console.log('helpers.getFeed error: ', error);
      } else {
        res.json({ urls: results.map(item => item.uri) });
      }
    });
  },

  postFeed: function(req, res) {
    Models.feeds.post(req.session.passport.user, req.body.url, function(err, results) {
      if (err) {
        console.log('helpers.postFeed error: ', err);
      } else {
        res.sendStatus(201);
      }
    });
  },

  signUp: function(req, res) {
    res.sendStatus(201);
  },

  signIn: function(req, res) {
    res.sendStatus(201);
  },

  signOut: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};
