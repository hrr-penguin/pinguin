module.exports = function(app, express) {
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/api/feed', (req,res) => {console.log("success server get req.param", req.param)});
  app.post('/api/signup', (req,res) => {console.log("success server post req.body", req.body)});
  app.put('/api/signin', (req,res) => {console.log("success server put req.body", req.body)});
  app.get('/api/signout', () => {});
};