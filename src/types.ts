import * as redux from 'redux';

import { Session } from "./reducers/session";
import { Tweet } from "./reducers/tweets";
import { User, UserGroup } from "./reducers/users";
import { Relationship } from "./reducers/relationships";
import { Retweet } from "./reducers/retweets";
import { All } from "./reducers";
import { ThunkAction } from 'redux-thunk';
import { Action } from './actions';

export type Thunk = ThunkAction<void, All, Promise<void>>;

export interface ConnectedState {
  session : Session;
  tweets : Tweet[];
  users : UserGroup;
  currentUser : User;
  relationships : Relationship[];
  retweetTweets : Tweet[];
  retweets : Retweet[];
  isLoaded: boolean;
  match : any;
  location : any;
  history : any;
}

export interface ConnectedDispatch {
  fetchRelationships : () => Thunk;
  followUser : (followedId : string) => Thunk;
  unfollowUser : (unfollowedId : string) => Thunk;
  fetchTimelineRetweets : () => Thunk;
  fetchUserRetweets : (user_id : string) => Thunk;
  retweet : (tweetId : string) => Thunk;
  logoutUser : () => Action;
  fetchTimelineTweets : () => Thunk;
  fetchUserTweets : (user_id : string) => Thunk;
  createTweet : (text : string) => Thunk;
  deleteTweet : (id : string) => Thunk;
  fetchUsers : () => Thunk;
  fetchCurrentUser : () => Thunk;
}

export interface UserInformation {
  first_name : string;
  last_name : string;
  username : string;
  email : string;
  password : string;
  confirm_password : string;
  [key: string] : string;
};
