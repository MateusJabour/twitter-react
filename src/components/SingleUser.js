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

  renderFollowButton(user) {
    if (this.props.relationships && this.props.currentUser) {
      if (!(this.props.currentUser.id === user.id)) {
        const relationship = this.props.relationships.find((relationship) => {
          return relationship.follower_id == this.props.currentUser.id && relationship.followed_id == user.id
        });

        const [buttonText, buttonAction] = relationship ? ['Unfollow', this.props.unfollowUser] : ['Follow', this.props.followUser];
        return (<button onClick={() => { buttonAction(user.id) }}>{buttonText}</button>)
      }
    }

    return '';
  }

  renderUserTweets() {
    if (this.props.tweets && this.props.users) {
      const userTweets = this.props.tweets.filter((tweet) => tweet.user_id === this.props.users[this.props.params.id].id);
      return userTweets.map((tweet) => {
        return <Tweet {...this.props} tweet={tweet} key={tweet.id}/>;
      });
    }
  }

  render () {
    if (this.props.users) {
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
              <StatsBar {...this.props} />
            </div>
            <div className="single-user__tweets">
              {this.renderUserTweets()}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>Loading</div>
    );
  }
}

export default SingleUser;
