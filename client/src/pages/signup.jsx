import React from 'react';
import Util from '../service.js';
import { hashHistory } from 'react-router'


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showError: false
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
    Util.signUp({
      username: this.state.username,
      password: this.state.password
    })
      .then( (data) => {
        this.props.updateAuth();
        hashHistory.push('/feed');
        this.setState( {showError: false} );
      })
      .catch( (err) => {
        this.setState({ showError: true });
      });
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
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <label>Username</label><br />
          <input type="text" name="username" value={this.state.username} onChange={this.handleChangeUserName} style={inputStyle}/>
          <br/>
          <label>Password</label><br />
          <input type="text" name="password" value={this.state.password} onChange={this.handleChangePassword} style={inputStyle}/>
          <br /><br />
          <button type="submit" value="Submit" style={btnStyle}>Submit</button>
        </form>
        { this.state.showError ? <p> This username has already been taken. Please choose a different username </p> : null }
      </div>
    )
  }
}


export default Signup;