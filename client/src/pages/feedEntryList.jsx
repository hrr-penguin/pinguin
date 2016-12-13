import React from 'react';


class FeedEntryList extends React.Component {

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
                    <li><a href={entry.link} target="_blank">{entry.title}</a></li>
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