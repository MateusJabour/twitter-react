import * as React from 'react';
import { Link } from 'react-router-dom';

import StatsBar from './StatsBar';
import Tweet from './Tweet';
import { ConnectedState, ConnectedDispatch } from '../types';
import { User } from '../reducers/users';
import { Tweet as TweetType } from '../reducers/tweets';
import { Retweet } from '../reducers/retweets';
import { sortByDate } from '../helpers';

class SingleUser extends React.Component<ConnectedState & ConnectedDispatch, {}> {
  constructor(props: ConnectedState & ConnectedDispatch) {
    super(props);

    this.renderFollowButton = this.renderFollowButton.bind(this);
    this.renderUserTweets = this.renderUserTweets.bind(this);
  }

  async componentWillMount() {
    console.log(this.props);
    await this.props.fetchUserTweets(this.props.users[this.props.match.params.id].id);
    await this.props.fetchUserRetweets(this.props.users[this.props.match.params.id].id);
  }

  renderFollowButton(user : User) {
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
    const retweetsEl : {tweet: JSX.Element, createdAt: string}[] =
      this.props.retweets.map((retweet) => {
        const tweet = this.props.retweetTweets.find(tweet => tweet.id === retweet.tweet_id);
        return { tweet: <Tweet
          {...this.props}
          key={retweet.id}
          tweet={tweet}
          isRetweet={true}
          retweetUser={this.props.users[retweet.user_id]}
        />, createdAt: retweet.created_at};
    });

    const tweetsEl : {tweet: JSX.Element, createdAt: string}[] =
      this.props.tweets.map((tweet) => {
        return { tweet: <Tweet
          {...this.props}
          key={tweet.id}
          tweet={tweet}
          isRetweet={false}
        />, createdAt: tweet.created_at};
    });

    return sortByDate([...retweetsEl, ...tweetsEl]);
  }

  render () {
    const user = this.props.users[this.props.match.params.id];

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
        </div>
      </div>
    );
  }
}

export default SingleUser;
