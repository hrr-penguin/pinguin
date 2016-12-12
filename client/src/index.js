
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import Pinguin from './pages/pinguin';
import Feed from './pages/feed';
import AddPinguin from './pages/addPinguin';
import Signup from './pages/signup';
import Signin from './pages/Signin';
import Signout from './pages/signout';

ReactDOM.render(
  <Router history={ hashHistory } >
    <Route path="/" component={ App } >
      <IndexRoute component={ Pinguin }></IndexRoute>
      <Route path="pinguin" component={ Pinguin } />
      <Route path="feed" component={ Feed } />
      <Route path="addpinguin" component={ AddPinguin } />
      <Route path="signup" component={ Signup } />
      <Route path="signin" component={ Signin } />
    </Route>
  </Router>
  , document.getElementById('app')
);

