import React from 'react';

import FeedItem from './Feeditem';
import Comments from './comments.jsx';


class FeedEntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments : false
    }
  }

  handleComments() {
    this.setState({showComments: !this.state.showComments});
  }

  render() {
    const entries = this.props.entries;
    let count = 0;

    return (
      <div>
          {
            entries.map( (entry) => {
              return (
                <div className="entry" key={count++}>
                  <ul >
                    <li><a href={entry.link} target="_blank">{entry.title}</a><button onClick={this.handleComments.bind(this)}></button></li>
                    {this.state.showComments ? <Comments link={entry.link}/> : null}
                  </ul>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default FeedEntryList;