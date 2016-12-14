import React from 'react';

import FeedItem from './Feeditem';

class FeedEntryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const entries = this.props.entries;
    let count = 0;

    return (
      <div>
        {entries.map( (entry) => {
          return (
            <FeedItem key={count++} info={entry} />
          )})
        }
      </div>
    )
  }
}

export default FeedEntryList;