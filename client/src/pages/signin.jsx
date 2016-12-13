import React from 'react';
import Util from '../service.js';
import { hashHistory } from 'react-router'


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isValid: true
    };
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    Util.signIn({
      username: this.state.username,
      password: this.state.password
    }).then(function() {
      console.log('tacos');
    }).catch(function() {
      console.log('burritos');
    })
    event.preventDefault();
  }

  render() {
    const divStyle = {
      width: '50%',
      margin: 'auto',
      textAlign: 'center',
      padding: '100px'
    };

    const formStyle = {
      display: 'inline-block',
      textAlign: 'center'
    };

    const btnStyle = {
      width: '100px',
      height: '40px',
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#FF9800',
      borderStyle: 'solid',
      borderWidth: '3px',
      outline: 'none'
    };

    const inputStyle = {
      width: '200px',
      height: '32px',
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#FF9800',
      borderStyle: 'solid',
      borderWidth: '3px',
      outline: 'none',
      marginLeft: '5px'
    };

    return (
      <div style={divStyle}>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <label htmlFor="username">Username</label><br />
            <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleChangeUserName} style={inputStyle}/>
          <br/>
          <label htmlFor="password">Password</label><br />
          <input id="password" type="password" name="password" value={this.state.password}onChange={this.handleChangePassword} style={inputStyle}/>
          <br /><br />
          <button type="submit" value="Submit"  style={btnStyle}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Signin;