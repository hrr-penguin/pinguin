const morgan = require('morgan');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../client/public/'));
};