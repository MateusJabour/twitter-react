import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
