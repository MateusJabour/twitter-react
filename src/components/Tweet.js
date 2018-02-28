import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

class Tweet extends React.Component {
  render () {
    const { tweet } = this.props;
    const tweetUser = this.props.users[tweet.user_id];
    return (
      <div className="tweet">
        <div className="tweet__main">
          <Link to={`user/${tweetUser.id}`} className="tweet__profile-picture profile-picture">
            <img className="profile-picture__image" src="https://pbs.twimg.com/profile_images/953264463284719616/iaOGYvqG_400x400.jpg" alt=""/>
          </Link>
          <div className="tweet__text">
            <p>
              <Link to={`/user/${tweet.user_id}`}>
                <strong>{tweetUser.first_name} {tweetUser.last_name}</strong>
              </Link>
              &nbsp;
              <Link to={`/user/${tweet.user_id}`}>
                @{tweetUser.username}
              </Link>
            </p>
            <p>{tweet.text}</p>
            <small>{tweet.created_at}</small>
          </div>
        </div>
        {tweet.user_id === this.props.currentUser.id? <button onClick={() => { this.props.deleteTweet(tweet.id) }}>X</button> : '' }
      </div>
    );
  }
}

export default Tweet;
