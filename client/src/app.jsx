import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Util from './service.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
    this.updateAuth = this.updateAuth.bind(this);
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  updateAuth() {
    this.setState({ isSignedIn: true });
    console.log("updating", this);
  }

  handleSignOutClick(event) {
    Util.signOut()
      .then( (res) => {
        this.setState({ isSignedIn: false });
        hashHistory.push('/signin');
      })
      .catch( (err) => {
        this.setState({ isSignedIn: true });
        hashHistory.push('/feed');
      });
    event.preventDefault();
  }

  render() {
    const divStyle = {
      backgroundColor: '#fff',
      width: '80%',
      margin: 'auto'
    };
    return (
      <div style={divStyle}>
        <h1>Pinguin</h1>
        {this.state.isSignedIn ? <IsSignedIn handleSignOutClick={this.handleSignOutClick}/> : <NotSignedIn />}
        {this.props.children && React.cloneElement(this.props.children, {updateAuth: this.updateAuth})}
      </div>
    )
  }
};

var IsSignedIn = ({handleSignOutClick}) => (
  <div>
    <Link to="/feed"><button>Feed</button></Link>
    <Link to="/addpinguin"><button>add a pinguin</button></Link>
    <button onClick={handleSignOutClick}>Signout</button>
  </div>
)

var NotSignedIn = ({updateAuth}) => (
  <div>
    <Link to="/signup"><button>Sign Up</button></Link>
    <Link to="/signin"><button>Sign In</button></Link>
  </div>
);

export default App;