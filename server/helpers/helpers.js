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
    Models.article.get(req.param.yays, req.param.nays, req.param.fakes, req.param.legits, req.param.ratings, req.param.rating_count,function(err, results) {
      if (err) {
        console.log('helpers.votingLogic error: ', err);
      } else {
        if (req.body.comment.yay !== null) {
          yays = req.param.yays + 1;
        }
        if (req.body.comment.nays !== null) {
          nays = req.param.nays + 1;
        }
        if (req.body.comment.fakes !== null) {
          fakes = req.param.fakes + 1;
        }
        if (req.body.comment.legits !== null) {
          legits = req.param.legits + 1;
        }
        if (req.body.comment.ratings !== null) {
          if (req.param.rating_count === 0) {
            ratings = req.body.comment.rating;
            rating_count = 1;
          } else {
            ratings = ((req.param.ratings + req.body.comment.rating)/req.param.rating_count);
            rating_count = req.param.rating_count + 1;
          }
        }
        Models.article.post(req.body.url, yays, nays, fakes, legits, ratings, rating_count, function(err, results) {
          if (err) {
            console.log('helpers.votingLogic error: ', err);
          } else {
            res.sendStatus(201);
          }
        });
      }
    });
  },

  postComment: function(req, res) {
    Models.comment.post(req.session.passport.user, req.body.url, req.body.comment, function(err, results) {
      if (err) {
        console.log('helpers.postComment error: ', err);
      } else {
        votingLogic(req, res);
        res.sendStatus(201);
      }
    });
  }
};
