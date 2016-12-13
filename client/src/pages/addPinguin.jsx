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
      borderRight: 'none',
      outline: 'none',
      marginLeft: '5px'
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="url" value={this.state.url} onChange={this.handleChange} style={inputStyle} placeholder="Insert url here..." />
          <button type="submit" style={btnStyle}> Add a Pinguin </button>
        </form>
      </div>
    )
  }
}

export default AddPinguin;