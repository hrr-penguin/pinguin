const mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'rss'
});

connection.connect();

module.exports = connection;
