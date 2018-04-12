import * as React from 'react';
import { requireAuth } from '../helpers';
import { ConnectedState, ConnectedDispatch } from '../types';
import { Route } from 'react-router';

import Header from './Header';
import Login from './Login';
import Timeline from './Timeline';
import Users from './Users';
import SingleUser from './SingleUser';


interface OwnProps {
  children : any;
}

class Main extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {
  shouldComponentUpdate(nextProps : ConnectedState & ConnectedDispatch) {
    console.log(nextProps);
    return nextProps.isLoaded;
  }

  componentWillReceiveProps(nextProps : ConnectedState & ConnectedDispatch) {
    requireAuth(nextProps);
  }

  componentWillMount() {
    requireAuth(this.props);
  }

  async componentDidMount() {
    await this.props.fetchCurrentUser();
    await this.props.fetchUsers();
    await this.props.fetchRelationships();
    await this.props.fetchTimelineTweets();
    await this.props.fetchTimelineRetweets();
  }

  render () {
    console.log('render main', this.props.isLoaded);
    return this.props.isLoaded ? (
      <div>
        <Header {...this.props} />
        <this.props.children {...this.props} />
      </div>
    ) : <div>Loading</div>;
  }
}

export default Main;
