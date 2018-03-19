import React from 'react';
import { Link } from 'react-router';

import StatsBar from './StatsBar';
import Tweet from './Tweet';

class Timeline extends React.Component {
  constructor() {
    super();

    this.renderTweets = this.renderTweets.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  componentWillMount() {
    this.props.fetchTimelineRetweets()
      .then(() => this.props.fetchTimelineTweets());
  }

  renderTweets() {
    const tweetsAndRetweets = this.props.tweets
      .concat(this.props.retweets)
      .sort(function(a, b) {
        a = new Date(a.created_at);
        b = new Date(b.created_at);
        return a > b ? -1 : a < b ? 1 : 0;
    });

    return tweetsAndRetweets.map((object) => {
      const [tweet, retweetUser] = !!object.text ?
        [object, undefined] :
        [this.props.retweetTweets.find(tweet => object.tweet_id === tweet.id), this.props.users[object.user_id]];
      return <Tweet
        {...this.props}
        tweet={tweet}
        key={object.id}
        isRetweet={!object.text}
        retweetUser={retweetUser}
      />
    });
  }

  createTweet(e) {
    e.preventDefault();
    this.props.createTweet(this.refs.tweet.value);
    e.target.reset();
  }

  renderProfile() {
    const { currentUser } = this.props;
    return (
      <div className="timeline__side-profile">
        <Link to={`user/${currentUser.id}`} className="profile-picture timeline__profile-picture">
          <img className="profile-picture__image" src="https://pbs.twimg.com/profile_images/953264463284719616/iaOGYvqG_400x400.jpg" alt=""/>
        </Link>
        <p>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
        <p>@{ currentUser.username }</p>
        <StatsBar {...this.props} user={currentUser}/>
      </div>
    )
  }

  render () {
    return this.props.isLoaded && (
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
