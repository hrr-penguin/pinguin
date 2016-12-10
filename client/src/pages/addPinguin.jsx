import React from 'react';
import Util from '../service.js';

class AddPinguin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleSubmit(event) {
    Util.addFeed({url: this.state.url})
      .then( (data) => {
        alert('RSS Feed has been added successfully!');
        console.log('success', data);
      })
      .catch( (err) => {
        console.log(err);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Add a Pinguin</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
            Add RSS Feed URL: <input type="text" name="url" value={this.state.url} onChange={this.handleChange}/>
          </label>
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default AddPinguin;