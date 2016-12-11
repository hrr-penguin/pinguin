import React from 'react';
import { Router, Route, Link } from 'react-router';

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
    console.log("this is thing", thing);
    return thing;
  }

  componentDidMount() {
    this.handleFetchFeed();
  }


  render() {
    //const { title } = this.props;
    const feeds = this.state.feeds;
    console.log(feeds);
    return (
      <div>
        <h1>FEED</h1>
        <div id="feed">
          {
            feeds.map( (obj) => {
              return (
                <div>
                  <label>{obj.feed.meta.link}</label>
                  <ul>
                  <li> {obj.feed.entries[0].title} </li>
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