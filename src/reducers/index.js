import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {tweets, tweetsIsLoaded} from './tweets';
import {users, usersIsLoaded} from './users';
import session from './session';
import {currentUser, currentUserIsLoaded} from './currentUser';
import {relationships, relationshipsIsLoaded} from './relationships';
import {retweets, retweetsIsLoaded} from './retweets';
import {retweetTweets, retweetTweetsIsLoaded} from './retweetTweets';

const rootReducer = combineReducers({
  session,
  tweets,
  tweetsIsLoaded,
  users,
  usersIsLoaded,
  currentUser,
  currentUserIsLoaded,
  relationships,
  relationshipsIsLoaded,
  retweetTweets,
  retweetTweetsIsLoaded,
  retweets,
  retweetsIsLoaded,
  routing: routerReducer
});

export default rootReducer;
