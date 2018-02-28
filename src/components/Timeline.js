import React from 'react';

import { Link } from 'react-router';
import { requireAuth } from '../helpers';
import tweetsApi from '../api/tweets';

import StatsBar from './StatsBar';

import Tweet from './Tweet';

class Timeline extends React.Component {
  constructor() {
    super();

    this.renderTweets = this.renderTweets.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    requireAuth(nextProps);
  }

  componentWillUpdate() {
    requireAuth(this.props);
  }

  componentWillMount() {
    requireAuth(this.props);
  }

  renderTweets() {
    if (this.props.tweets && this.props.users) {
      return this.props.tweets.map((tweet) => {
        return <Tweet {...this.props} tweet={tweet} key={tweet.id}/>
      });
    }
  }

  createTweet(e) {
    e.preventDefault();
    this.props.createTweet(this.refs.tweet.value);
    e.target.reset();
  }

  renderProfile() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div className="timeline__side-profile">
          <Link to={`user/${currentUser.id}`} className="profile-picture timeline__profile-picture">
            <img className="profile-picture__image" src="https://pbs.twimg.com/profile_images/953264463284719616/iaOGYvqG_400x400.jpg" alt=""/>
          </Link>
          <p>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
          <p>@{ currentUser.username }</p>
          <StatsBar {...this.props} />
        </div>
      )
    }
  }

  render () {
    return (
      <div className="timeline__container container">
        {this.renderProfile()}
        <div className="timeline__tweets">
          <form onSubmit={this.createTweet}>
            <textarea placeholder="What are you thinking?" ref="tweetText" cols="30" rows="5" ref="tweet"></textarea>
            <input type="submit" value="Tweet"/>
          </form>
          <div className="tweets">
            {this.renderTweets()}
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
