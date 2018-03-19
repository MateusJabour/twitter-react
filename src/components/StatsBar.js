import React from 'react'

class StatsBar extends React.Component {
  render () {
    return (
      <div className="stats-bar">
        <div className="stats-bar__stat">
          <div>Followers</div>
          <div>
            {this.props.relationships.filter((relationship) => relationship.followed_id === this.props.user.id).length}
          </div>
        </div>
        <div className="stats-bar__stat">
          <div>Following</div>
          <div>
            {this.props.relationships.filter((relationship) => relationship.follower_id === this.props.user.id).length}
          </div>
        </div>
        <div className="stats-bar__stat">
          <div>Tweets</div>
          <div>
            {this.props.tweets.concat(this.props.retweets).filter((tweet => tweet.user_id === this.props.user.id)).length}
          </div>
        </div>
      </div>
    );
  }
}

export default StatsBar;
