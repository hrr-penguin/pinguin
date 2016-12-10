const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client/public/'));


  app.use(require('express-session')({
    secret: 'secrets',
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

};
