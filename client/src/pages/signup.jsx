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
    // console.log("it was submitted", event)

  render() {
    return (
      <div>
        <h1>SIGNUP</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChangeUserName}/>
          </label>
          <br/>
          <label>
            Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
          </label>
          <button type="submit" value="Submit">Submit</button>
        </form>
        { this.state.showError ? <p> This username has already been taken. Please choose a different username </p> : null }
      </div>
    )
  }
}


export default Signup;