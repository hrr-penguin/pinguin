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
        <Link to="/pinguin"><button>Pinguin</button></Link>
        <Link to="/feed"><button>Feed</button></Link>
        <Link to="/addpinguin"><button>add a pinguin</button></Link>
        <Link to="/signin"><button>Signout</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/signin"><button>Signin</button></Link>
        {this.props.children}
      </div>
    )
  }
};

// var IsSignedIn = (props) => (
// )
//         {this.state.isSignedIn ? <IsSignedIn /> : <NotSignedIn />}

// var NotSignedIn = (props) => (
// );

export default App;