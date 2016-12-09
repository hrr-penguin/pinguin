const path = require('path');
const knex = require('knex')({
  client: 'sqlLite3',
  connection: {
    filename: path.join(__dirname + '/../../database/pinguin.sqlite')
  },
  useNullasDefault: true
});
