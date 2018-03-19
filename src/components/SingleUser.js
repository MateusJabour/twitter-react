import React from 'react';
import { Link } from 'react-router';

import StatsBar from './StatsBar';
import Tweet from './Tweet';

class SingleUser extends React.Component {
  constructor() {
    super();

    this.renderFollowButton = this.renderFollowButton.bind(this);
    this.renderUserTweets = this.renderUserTweets.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserTweets(this.props.users[this.props.params.id].id)
      .then(() => this.props.fetchUserRetweets(this.props.users[this.props.params.id].id));
  }

  renderFollowButton(user) {
    if (!(this.props.currentUser.id === user.id)) {
      const relationship = this.props.relationships.find((relationship) => {
        return relationship.follower_id == this.props.currentUser.id && relationship.followed_id == user.id
      });

      const [buttonText, buttonAction] = relationship ? ['Unfollow', this.props.unfollowUser] : ['Follow', this.props.followUser];
      return (
        <button onClick={() => { buttonAction(user.id) }}>{buttonText}</button>
      );
    }

    return '';
  }

  renderUserTweets() {
    const tweetsAndRetweets = this.props.tweets
      .concat(this.props.retweets)
      .filter((tweet) => tweet.user_id === this.props.users[this.props.params.id].id)
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

  render () {
    const user = this.props.users[this.props.params.id];

    return (
      <div className="single-user__container container">
        <div className="single-user__cover-image">
          <img src="https://pbs.twimg.com/profile_banners/70179446/1456720843/1500x500" alt=""/>
        </div>
        <div className="single-user__info">
          <div className="single-user__profile">
            <Link to={`user/${user.id}`} className="single-user__profile-picture profile-picture">
              <img className="profile-picture__image" src="https://pbs.twimg.com/profile_images/953264463284719616/iaOGYvqG_400x400.jpg" alt=""/>
            </Link>
            {this.renderFollowButton(user)}
            <h1>@{user.username}</h1>
            <h2>{user.first_name} {user.last_name}</h2>
            <StatsBar {...this.props} user={user}/>
          </div>
          <div className="single-user__tweets">
            {this.renderUserTweets()}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleUser;
