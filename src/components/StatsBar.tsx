import * as React from 'react';
import { ConnectedDispatch, ConnectedState } from '../types';
import { User } from '../reducers/users';

interface OwnProps {
  user: User;
}

const StatsBar : React.SFC<ConnectedState & ConnectedDispatch & OwnProps> = (props) => {
  return (
    <div className="stats-bar">
      <div className="stats-bar__stat">
        <div>Followers</div>
        <div>
          {props.relationships.filter((relationship) => relationship.followed_id === props.user.id).length}
        </div>
      </div>
      <div className="stats-bar__stat">
        <div>Following</div>
        <div>
          {props.relationships.filter((relationship) => relationship.follower_id === props.user.id).length}
        </div>
      </div>
      <div className="stats-bar__stat">
        <div>Tweets</div>
        <div>
          {[...props.tweets, ...props.retweets].filter((tweet => tweet.user_id === props.user.id)).length}
        </div>
      </div>
    </div>
  );
}

export default StatsBar;
