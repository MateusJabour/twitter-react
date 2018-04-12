import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions/index';

import Main from './Main';
import { All } from '../reducers';
import { ConnectedDispatch, ConnectedState } from '../types';

function mapStateToProps(state : All) {
  return {
    tweets: state.tweets,
    users: state.users,
    session: state.session,
    relationships: state.relationships,
    currentUser: state.currentUser,
    retweets: state.retweets,
    retweetTweets: state.retweetTweets,
    isLoaded:
      state.usersIsLoaded &&
      state.tweetsIsLoaded &&
      state.retweetsIsLoaded &&
      state.relationshipsIsLoaded &&
      state.retweetTweetsIsLoaded &&
      state.currentUserIsLoaded
  };
}

function mapDispatchToProps(dispatch : Dispatch<All>) : ConnectedDispatch {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
