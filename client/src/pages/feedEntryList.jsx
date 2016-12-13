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
        {entries.map( (entry) => {
          return (
            <FeedItem info={entry} />
          )})
        }
      </div>
    )
  }
}

export default FeedEntryList;