import React from 'react'

class StatsBar extends React.Component {
  render () {
    if (this.props.currentUser && this.props.relationships) {
      const { currentUser } = this.props;
      return (
        <div className="stats-bar">
          <div className="stats-bar__stat">
            <div>Followers</div>
            <div>
              {this.props.relationships.filter((relationship) => relationship.followed_id === currentUser.id).length}
            </div>
          </div>
          <div className="stats-bar__stat">
            <div>Following</div>
            <div>
              {this.props.relationships.filter((relationship) => relationship.follower_id === currentUser.id).length}
            </div>
          </div>
          <div className="stats-bar__stat">
            <div>Tweets</div>
            <div>
              {this.props.tweets.filter((tweet) => tweet.user_id === currentUser.id).length}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StatsBar;
