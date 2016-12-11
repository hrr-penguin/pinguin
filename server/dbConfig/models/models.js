const db = require('../../db/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let replaceIntoJoin = function(params, callback) {
  let query = 'REPLACE INTO users_feeds (user_id, feed_id) VALUES (?, ?)';
  db. query(query, params, function(err, results) {
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
      let query = 'SELECT * FROM users WHERE user = ?';
      db.query(query, function(err, results) {
        callback(err, results);
      });
    },
    post: function(user, password, callback) {
      let query = 'INSERT INTO users(username, password) value (?,?)';
      bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query(query, [user, hash], function(err, results) {
          callback(err, results);
        });
      });
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
  }
};
