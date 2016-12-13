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
  },

  getComments: function(req, res) {
    Models.comments.get(req.body.url, function(err, results) {
      if (err) {
        console.log('helpers.getComments error: ', err);
      } else {
        res.json({ comments: results.map(item => item.comment) });
      }
    });
  },

  votingLogic: function(req, res) {
   Models.article.get(req.param.yay, req.param.nay, req.param.fake, req.param.legit, function(err, results) {
      if (err) {
        console.log('helpers.votingLogic error: ', err);
      } else {
        if (req.param.yays !== null ) {
          res.json({ yays: req.param.yays + 1 });
        }
        if (req.param.nays !== null ) {
          res.json({ nays: req.param.nays + 1 });
        }

        if (req.param.fake !== null ) {
          res.json({ fake: req.param.fake + 1 });
        }
        if (req.param.legit !== null ) {
          res.json({ legit: req.param.legit + 1 });
        }
      }
    });
  },

  postComment: function(req, res) {
    Models.comment.post(req.session.passport.user, req.body.url, req.body.comment, function(err, results) {
      if (err) {
        console.log('helpers.postComment error: ', err);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
