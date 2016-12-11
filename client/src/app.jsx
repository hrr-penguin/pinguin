import React from 'react';
import Nav from './pages/nav.jsx'
import { Router, Route, Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      isSignedOut: true
    };
    // console.log(this.props);
  }

  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const location = this.props;
    return (
      <div>
        <Nav location={location}/>
        {this.props.children || <p> You are {!this.state.isSignedIn && 'not'} logged in. </p>}
      </div>
    )
  }
};

export default App;