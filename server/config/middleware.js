const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = function(app, express, passport) {
  app.use(morgan('dev'));
  app.use(cookieParser());
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
