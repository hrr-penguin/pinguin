import React from 'react';
import { Router, Route, Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }

  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const location = this.props;
    return (
      <div>
        <Nav location={location}/>
        {this.props.children}
      </div>
    )
  }
};

export default App;