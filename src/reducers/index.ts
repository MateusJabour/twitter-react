import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { Tweet, tweets, tweetsIsLoaded } from './tweets';
import { User, users, usersIsLoaded, UserGroup } from './users';
import { Session, session } from './session';
import { currentUser, currentUserIsLoaded } from './currentUser';
import { Relationship, relationships, relationshipsIsLoaded } from './relationships';
import { Retweet, retweets, retweetsIsLoaded } from './retweets';
import { retweetTweets, retweetTweetsIsLoaded } from './retweetTweets';

export type All = {
  session : Session,
  tweets : Tweet[],
  tweetsIsLoaded: boolean,
  users : UserGroup | {},
  usersIsLoaded: boolean,
  currentUser: User | {},
  currentUserIsLoaded: boolean,
  relationships: Relationship[],
  relationshipsIsLoaded: boolean,
  retweetTweets: Tweet[],
  retweetTweetsIsLoaded: boolean,
  retweets: Retweet[],
  retweetsIsLoaded: boolean,
}

const rootReducer = combineReducers<All>({
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
