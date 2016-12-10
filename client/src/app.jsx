import React from 'react';
import { Router, Route, Link } from 'react-router';

class App extends React.Component {

  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    return (
      <div>
        <Link to="/pinguin"><button>Pinguin</button></Link>
        <Link to="/feed"><button>Feed</button></Link>
        <Link to="/addpinguin"><button>add a pinguin</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/signin"><button>Signin</button></Link>
        <Link to="/signin"><button>Signout</button></Link>
        {this.props.children}
      </div>
    )
  }
}

export default App;