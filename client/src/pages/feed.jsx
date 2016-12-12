import React from 'react';
import { Router, Route, Link } from 'react-router';
import FeedEntryList from './FeedEntryList';

    var subscriptions = {urls: ['http://www.evilmadscientist.com/feed/','http://boingboing.net/feed', 'http://hackaday.com/feed/']}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
    var thing;
    this.handleFetchFeed = this.handleFetchFeed.bind(this);
  }

  handleFetchFeed(event) {
    var thing=[];
    for (var i = 0; i < subscriptions.urls.length; i++) {
      feednami.load(subscriptions.urls[i], (feed) => {
        thing.push(feed);
        this.setState({ feeds: thing });
      });
    }
    console.log("this is the thing", thing);
  }

  componentWillMount() {
    this.handleFetchFeed();
  }


  render() {
    const feeds = this.state.feeds;
    return (
      <div>
        <h1>FEED</h1>
        <div id="feed" className="feed-container">
          {
            feeds.map( (obj) => {
              return (
                <div key={obj.feed.meta['rss:title']['#']}>
                  <label>{obj.feed.meta['rss:title']['#']}</label>
                  <ul>
                    <FeedEntryList entries={obj.feed.entries}/>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Feed;