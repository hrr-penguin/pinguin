import React from 'react';


class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const div1Styles = {
      border: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      margin: '5px',
      display: 'flex'
    };
    const div2Styles = {
      // width: '150px',
      // height: '150px',
      // overflow: 'none'
    }
    return (
      <div style={div1Styles}>
        <div style={div2Styles}>
          <img src={this.props.info.image.url} alt={this.props.info.image.alt}/>
        </div>
        <div>
          <a href={this.props.info.link} target="_blank"><h1>{this.props.info.title}</h1></a>
          {this.props.info.description.slice(0,100)}
        </div>
      </div>
    )
  }
}

export default FeedItem;