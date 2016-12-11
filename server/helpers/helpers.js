const Models = require('../models/models.js');

module.exports = {
  getFeed: function(req, res) {
    console.log(req.session.passport);
    // TODO: send in user id instead of the hard coded 1.
    Models.feeds.get(req.session.passport.user, function(err, results) {
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
    console.log(req.session.passport);
    console.log(req.user);
    res.sendStatus(201);
  },

  signIn: function(req, res) {
    console.log('signed in.');
    res.sendStatus(201);
  },

  signOut: function(req, res) {
    req.logout();
    res.redirect('/');
  }
}