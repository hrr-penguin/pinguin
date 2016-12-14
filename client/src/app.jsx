import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Util from './service.js';
import AddPinguin from './pages/addPinguin';

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
    const imgStyle = {
      display: 'block',
      margin: 'auto'
    };
    return (
      <div style={divStyle}>
        <Link to="/feed"><img width="150px" height="150px" src="assets/logo.svg" alt="logo" style={imgStyle} /></Link>
        {this.state.isSignedIn ? <IsSignedIn handleSignOutClick={this.handleSignOutClick}/> : <NotSignedIn />}
        {this.props.children && React.cloneElement(this.props.children, {updateAuth: this.updateAuth})}
      </div>
    )
  }
};

const btnStyle = {
  width: '100px',
  height: '40px',
  backgroundColor: '#000',
  color: '#fff',
  borderColor: '#FF9800',
  borderStyle: 'solid',
  borderWidth: '3px',
  margin: '5px',
  outline: 'none'
};

const nav1Style = {
  display: 'flex',
  justifyContent: 'space-between'
};

const nav2Style = {
  display: 'flex',
  justifyContent: 'flex-end'
};

var IsSignedIn = ({handleSignOutClick}) => (
  <div style={nav1Style}>
    <AddPinguin />
    <button style={btnStyle} onClick={handleSignOutClick}>Signout</button>
  </div>
)

var NotSignedIn = ({updateAuth}) => (
  <div style={nav2Style}>
    <Link to="/signup"><button style={btnStyle}>Sign Up</button></Link>
    <Link to="/signin"><button style={btnStyle}>Sign In</button></Link>
  </div>
);

export default App;