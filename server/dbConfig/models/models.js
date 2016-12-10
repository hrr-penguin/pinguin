const db = require('../../db/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    }
  }
};
