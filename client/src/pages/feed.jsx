import React from 'react';
import { Router, Route, Link } from 'react-router';
import FeedEntryList from './FeedEntryList';
import Util from '../service.js';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    };
    this.handleFetchFeed = this.handleFetchFeed.bind(this);
  }

  handleFetchFeed( { urls } ) {
    var feeds = [];
    for (var i = 0; i < urls.length; i++) {
      feednami.load(urls[i], (feed) => {
        feeds.push(feed);
        this.setState({ feeds: feeds });
      });
    }
  }

  componentWillMount() {
    Util.getFeed()
      .then(this.handleFetchFeed);
  }


  render() {
    const feeds = this.state.feeds;
    const divStyle = {
      height: '100%',
      width: '90%',
      margin: 'auto'
    }
    return (
      <div id="feed" className="feed-container" style={divStyle}>
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
    )
  }
}

export default Feed;