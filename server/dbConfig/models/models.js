const db = require('../../db/db.js');

module.exports = {
  users: {
    get: function(user, callback) {
      let query = 'SELECT * FROM users WHERE user = ?';
      db.query(query, function(err, results) {
        callback(err, results);
      });
    }
  }
};
