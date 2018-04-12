import * as React from 'react';
import { Link } from 'react-router-dom';

import StatsBar from './StatsBar';
import Tweet, { TweetOwnProps } from './Tweet';

import { ConnectedState, ConnectedDispatch } from '../types';
import { Retweet } from '../reducers/retweets';
import { Tweet as TweetType } from '../reducers/tweets';
import { sortByDate } from '../helpers';

class Timeline extends React.Component<ConnectedState & ConnectedDispatch, {}> {
  constructor(props: ConnectedState & ConnectedDispatch) {
    super(props);

    this.renderTweets = this.renderTweets.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  renderTweets() {
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

  createTweet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = this.refs.tweet as HTMLInputElement;
    this.props.createTweet(form.value);

    e.currentTarget.reset();
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
    return (
      <div className="timeline__container container">
        {this.renderProfile()}
        <div className="timeline__tweets">
          <form onSubmit={this.createTweet}>
            <textarea placeholder="What are you thinking?" cols={30} rows={5} ref="tweet"></textarea>
            <input type="submit" value="Tweet"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Timeline;
