
import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './app.jsx';
import Pinguin from "./pages/Pinguin";
import Feed from "./pages/Feed";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Pinguin}></IndexRoute>
      <Route path="pinguin" component={Pinguin} />
      <Route path="feed" component={Feed} />
      <Route path="signup" component={Signup} />
      <Route path="signin" component={Signin} />
    </Route>
  </Router>
  , document.getElementById('app')
);

