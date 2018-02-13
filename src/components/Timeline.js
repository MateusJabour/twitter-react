import React from 'react';
import PropTypes from 'prop-types';

import { requireAuth } from '../helper';

class Timeline extends React.Component {
  constructor() {
    super();

    this.renderTweet = this.renderTweet.bind(this);
  }

  componentWillMount() {
    requireAuth(this.props);
  }

  renderTweet(tweet) {
    return (
      <div key={tweet.id}>
        <h1>{this.props.users.find((user) => user.id === tweet.user_id).name}</h1>
        <p>{tweet.text}</p>
        <small>{tweet.created_date}</small>
      </div>
    )
  }

  render () {
    return (
      <div className="tweets">
      </div>
    );
  }
}

export default Timeline;
