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
    }).then( () => {
      if(this.state.isValid) {
        hashHistory.push('/feed');
      }
    });
    event.preventDefault();
    // console.log("it was submitted", event)
  }

  render() {
    return (
      <div>
        <h1>SIGNIN</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChangeUserName}/>
          </label>
          <br/>
          <label>
            Password: <input type="text" name="password" value={this.state.password}onChange={this.handleChangePassword}/>
          </label>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signin;