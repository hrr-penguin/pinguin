import React from 'react';


class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const div1Styles = {
      margin: '5px',
      display: 'flex',
      fontFamily: 'Arial',
      textColor: '#FF9800'
    };
    const div2Styles = {
      margin: '10px'
    }
    return (
      <div style={div1Styles}>
        <img src={this.props.info.image.url} alt={this.props.info.image.alt} height="150" width="150"/>
        <div style={div2Styles}>
          <a href={this.props.info.link} target="_blank"><h1>{this.props.info.title}</h1></a>
          {this.props.info.description.slice(0,100)}
        </div>
      </div>
    )
  }
}

export default FeedItem;