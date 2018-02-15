import React from 'react';
import PropTypes from 'prop-types';

import { requireAuth } from '../helper';
import tweetsApi from '../api/tweets';

class Timeline extends React.Component {
  constructor() {
    super();

    this.renderTweet = this.renderTweet.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  componentWillMount() {
    requireAuth(this.props);
  }

  renderTweet(tweet) {
    return (
      <div key={tweet.id}>
        <h1>{tweet.user_id}</h1>
        <p>{tweet.text}</p>
        <small>{tweet.created_at}</small>
      </div>
    )
  }

  createTweet(e) {
    e.preventDefault();
    tweetsApi.createTweet(this.refs.tweetText.value).then(({ json, response }) => {
      if (response.ok) {
        this.props.createTweet(json);
      }
    });
  }

  render () {
    return (
      <div className="tweets">
        <div>
          <form onSubmit={this.createTweet}>
            <textarea placeholder="What are you thinking?" ref="tweetText" cols="30" rows="5"></textarea>
            <input type="submit" value="Tweet"/>
          </form>
        </div>
        <div>
          {this.props.tweets.map((tweet) => this.renderTweet(tweet))}
        </div>
      </div>
    );
  }
}

export default Timeline;
