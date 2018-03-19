import React from 'react';
import Header from './Header';
import Login from './Login';
import Timeline from './Timeline';
import { requireAuth } from '../helpers';

class Main extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.isLoaded;
  }

  componentWillReceiveProps(nextProps) {
    requireAuth(nextProps);
  }

  componentWillMount() {
    requireAuth(this.props);
  }

  componentDidMount() {
    this.props.fetchCurrentUser()
    .then(() => this.props.fetchUsers())
    .then(() => this.props.fetchRelationships())
    .then(() => this.props.fetchTimelineTweets())
    .then(() => this.props.fetchTimelineRetweets());
  }

  render () {
    return this.props.isLoaded ? (
      <div>
        <Header {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    ) : <div>Loading</div>;
  }
}

export default Main;
