const db = require('../db/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
  }
};
