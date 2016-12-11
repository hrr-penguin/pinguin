import React from 'react';
import { Router, Route, Link } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: true
    };
  }

  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    return (
      <div>
        <Link to="/pinguin">Pinguin</Link>
        {
          this.state.isSignedIn ? <IsSignedIn /> : <NotSignedIn />
        }
      </div>
    )
  }
};

var IsSignedIn = (props) => (
  <div>
    <Link to="/feed"><button>Feed</button></Link>
    <Link to="/addpinguin"><button>add a pinguin</button></Link>
    <Link to="/signin"><button>Signout</button></Link>
  </div>
)

var NotSignedIn = (props) => (
  <div>
    <Link to="/signup"><button>Sign Up</button></Link>
    <Link to="/signin"><button>Signin</button></Link>
  </div>
);

export default Nav;

