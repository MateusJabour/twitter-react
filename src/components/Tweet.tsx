import * as React from 'react';

import { Link } from 'react-router-dom';
import { difFromCreationDate } from '../helpers';
import { ConnectedState, ConnectedDispatch } from '../types';
import { Tweet } from '../reducers/tweets';
import { User } from '../reducers/users';
import { Retweet } from '../reducers/retweets';

export interface TweetOwnProps {
  isRetweet : boolean;
  tweet ?: Tweet;
  retweetUser ?: User;
}

const Tweet : React.SFC<ConnectedState & ConnectedDispatch & TweetOwnProps> = (props) => {
  const { tweet } = props;
  if (tweet) {
    const tweetUser = props.users[tweet.user_id];
    return (
      <div className="tweet__container">
        <small className="tweet__retweet-message">
          { props.isRetweet && props.retweetUser ? `${props.retweetUser.first_name} ${props.retweetUser.last_name} retweeted this`: ''}
        </small>
        <div className="tweet">
          <div className="tweet__main">
            <Link to={`user/${tweetUser.id}`} className="tweet__profile-picture profile-picture">
              <img className="profile-picture__image" src="https://pbs.twimg.com/profile_images/953264463284719616/iaOGYvqG_400x400.jpg" alt=""/>
            </Link>
            <div className="tweet__middle">
              <div className="tweet__user-info">
                <Link to={`/user/${tweet.user_id}`} className="tweet__user-fullname">
                  <strong>{tweetUser.first_name} {tweetUser.last_name}</strong>
                </Link>
                &nbsp;
                <Link to={`/user/${tweet.user_id}`} className="tweet__user-username">
                  @{tweetUser.username}
                </Link>
                <small className="tweet__time">{difFromCreationDate(tweet.created_at)}</small>
              </div>
              <p>{tweet.text}</p>
              <div className="tweet__actions">
                <div className="tweet__action">
                  <span>5</span>
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/messaging-3/48/Reply-256.png"
                    onClick={() => {}}
                    alt=""
                  />
                </div>
                <div className="tweet__action">
                  <span>{props.retweets.filter((retweet) => retweet.tweet_id === tweet.id).length}</span>
                  <img
                    src="https://www.seoclerk.com/pics/want55519-1naJS01508179397.png"
                    onClick={() => { props.retweet(tweet.id) }}
                    alt=""
                  />
                </div>
                <div className="tweet__action">
                  <span>3</span>
                  <img
                    src="https://www.shareicon.net/data/128x128/2017/06/22/887576_heart_512x512.png"
                    onClick={() => {}}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tweet__side-info">
            {tweet.user_id === props.currentUser.id ?
              <img
                src="https://cdn3.iconfinder.com/data/icons/in-and-around-the-house/43/trash_bin-512.png"
                onClick={() => { props.deleteTweet(tweet.id) }}
                className="tweet__delete-button"
                />
              : ''
            }
          </div>
        </div>
      </div>
    )
  } else {
    return (<div>Hey</div>)
  }

}

export default Tweet;
