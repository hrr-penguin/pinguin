import React from 'react';
import { Router, Route, Link } from 'react-router'

class App extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/")
  }

  render() {
    return (
      <div>
        <Link to="/pinguin"><button>Pinguin</button></Link>
        <Link to="/feed"><button>Feed</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/signin"><button>Login</button></Link>
        <Link to="/signin"><button>Logout</button></Link>
        {this.props.children}
      </div>

    )
  }
}

export default App;