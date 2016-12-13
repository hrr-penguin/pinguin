import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import AddPinguin from './addPinguin';
import Util from '../service.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: true
    };
  }

  logout() {
    Util.signOut();
    console.log('tacos from logout');
  }

  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const divStyle = {
      margin: 'auto',
      width: '50%'
    };
    const imgStyle = {
      display: 'block',
      margin: 'auto'
    };

    return (
      <div>
        <Link to="/feed"><img width="150px" height="150px" src="assets/logo.svg" alt="logo" style={imgStyle} /></Link>
        <div>
          {this.state.isSignedIn ? <IsSignedIn /> : <NotSignedIn />}
        </div>
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
  margin: '5px'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between'
};


var IsSignedIn = (props) => (
  <div style={navStyle}>
    <AddPinguin />
    <button style={btnStyle} onClick={function(e) {
      Util.signOut();
      hashHistory.push('/signin');
    }}>Signout</button>
  </div>
);

var NotSignedIn = (props) => (
  <div>
    <Link to="/signup"><button style={btnStyle}>Sign Up</button></Link>
    <Link to="/signin"><button style={btnStyle}>Signin</button></Link>
  </div>
);

export default Nav;

