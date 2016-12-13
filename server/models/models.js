const db = require('../db/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let replaceIntoJoin = function(params, callback) {
  let query = 'REPLACE INTO users_feeds (user_id, feed_id) VALUES (?, ?)';
  db.query(query, params, function(err, results) {
    if (err) {
      console.log('models.replaceIntoJoin: ', err);
    } else {
      callback(err, results);
    }
  });
};

module.exports = {
  users: {
    get: function(user, callback) {
      let query = 'SELECT * FROM users WHERE username = ?';
      db.query(query, user, function(err, results) {
        callback(err, results);
      });
    },
    post: function(user, password, callback) {
      let query = 'INSERT INTO users(username, password) VALUES (?,?)';
      bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query(query, [user, hash], function(err, results) {
          callback(err, results);
        });
      });
    },
    checkPassword: function(attemptedPassword, password) {
      return bcrypt.compareSync(attemptedPassword, password);
    }
  },
  feeds: {
    get: function(user, callback) {
      let query = 'SELECT uri FROM feeds JOIN users_feeds ON(feeds.id = users_feeds.feed_id) JOIN users ON(users_feeds.user_id = users.id) WHERE users.id = ?';
      db.query(query, user, function(err, results) {
        callback(err, results);
      });
    },
    post: function(user, uri, callback) {
      let query = 'INSERT INTO feeds (uri) VALUE (?)';
      db.query(query, uri, function(err, results) {
        if (err) {
          // If uri already exist.
          if (err.errno === 1062) {
            // Figure out the id of the entry.
            let query = 'SELECT id FROM feeds WHERE uri = ?';
            db.query(query, uri, function(err, results) {
              if (err) {
                console.log('models.feeds.post error2: ', err);
              } else {
                // Save into the join table.
                replaceIntoJoin([user, results[0].id], callback);
              }
            });
          } else {
            console.log('models.feeds.post error1: ', err);
          }
        } else {
          // uri added to the database so go ahead and link to user.
          replaceIntoJoin([user, results.insertId], callback);
        }
      });
    }
  },
  comment: {
    post: function(user_id, url, comment, callback) {
      let query = 'INSERT INTO article (url) VALUE (?)';
      db.query(query, url, function(err, results) {
        if (err) {
          if (err.errno === 1062) {
            let query = 'SELECT id FROM article WHERE article.url = ?';
            db.query(query, url, function(err, results) {
              let query = 'INSERT INTO comments (article_id, user_id, comment, yay, nay, fake, legit, rating) VALUE (?)';
              db.query(query, comment, function(err, results) {
                if (err) {
                  console.log('models.comment.post error: ', err);
                } else {
                  callback(err,results);
                }
              });
            });
          }
        } else {
            let query = 'INSERT INTO comments (article_id, user_id, comment, yay, nay, fake, legit, rating) VALUE (?)';
            db.query(query, comment, function(err, results) {
              if (err) {
                console.log('models.comment.post error: ', err);
              } else {
                callback(err,results);
              }
            });
        }
      });
    }
  },
  comments: {
    get: function(url, callback) {
      let query = 'SELECT comment FROM comments JOIN article_comments ON(comments.id = article_comments.comment_id) JOIN article ON(article_comments.article_id = article.id) WHERE article.url = ?';
      db.query(query, url, function(err, results) {
        callback(err, results);
      });
    }
  },
  article: {
    get: function(url, callback) {
      let query = 'SELECT yays,nays,fakes,legits FROM article WHERE article.url = ?';
      db.query(query, url, function(err, results) {
        callback(err, results);
      });
    }
  }
};
