import TweetsApi from '../api/tweets';
import SessionApi from '../api/session';
import UserApi from '../api/user';
import RelationshipsApi from '../api/relationships';

import { parseJwt } from '../helpers';

function loginSuccess(authToken) {
  return {
    type: "LOGIN_SUCCESS",
    authToken
  };
}

function loginFailed(message) {
  return {
    type: "LOGIN_FAILED",
    message
  };
}

export function logoutUser(credentials) {
  return {
    type: "LOGOUT_USER"
  };
}

export function loginUser(credentials) {
  return function(dispatch) {
    return SessionApi.login(credentials).then(({ json, response }) => {
      if (response.ok) {
        dispatch(loginSuccess(json.auth_token));
      } else {
        dispatch(loginFailed(json.message));
      }
    });
  }
}

export function signupUser(user) {
  return function(dispatch) {
    return UserApi.signup(user).then(({ json, response}) => {
      if (response.ok) {
        dispatch(signupSuccess(json.auth_token, json.user))
      } else {
        dispatch(signupFailed(json.message))
      }
    })
  }
}

function signupSuccess(authToken, user) {
  return {
    type: 'SIGNUP_SUCCESS',
    authToken,
    user
  }
}

function signupFailed(message) {
  return {
    type: 'SIGNUP_FAILED',
    message
  }
}

export function fetchTimelineTweets() {
  return function (dispatch) {
    return TweetsApi.getAllTweets()
      .then(({json, response}) => dispatch(receiveTweets(json)))
      .catch((error) => error);
  }
}

export function fetchUserTweets(user_id) {
  return function (dispatch) {
    return TweetsApi.getUserTweets(user_id)
      .then(({json, response}) => dispatch(receiveTweets(json)))
      .catch((error) => error);
  }
}

function receiveTweets(tweets) {
  return {
    type: 'RECEIVE_TWEETS',
    tweets
  }
}

export function createTweet(text) {
  return function (dispatch) {
    return TweetsApi.createTweet(text)
      .then(({json, response}) => dispatch(tweetCreationSuccess(json)))
      .catch((error) => error);
  }
}

function tweetCreationSuccess(tweet) {
  return {
    type: 'TWEET_CREATION_SUCCESS',
    tweet
  }
}

export function deleteTweet(id) {
  return function (dispatch) {
    return TweetsApi.deleteTweet(id)
      .then(({json, response}) => dispatch(tweetDeletionSuccess(json.id)))
      .catch((error) => error);
  }
}

function tweetDeletionSuccess(id) {
  return {
    type: 'TWEET_DELETION_SUCCESS',
    id
  }
}

export function fetchTimelineRetweets() {
  return function (dispatch) {
    return TweetsApi.getAllRetweets()
      .then(({json, response}) => dispatch(receiveRetweets(json.retweets, json.retweet_tweets)))
      .catch((error) => error);
  }
}

export function fetchUserRetweets(user_id) {
  return function (dispatch) {
    return TweetsApi.getUserRetweets(user_id)
      .then(({json, response}) => dispatch(receiveRetweets(json.retweets, json.retweet_tweets)))
      .catch((error) => error);
  }
}

function receiveRetweets(retweets, retweetTweets) {
  return {
    type: 'RECEIVE_RETWEETS',
    retweets,
    retweetTweets
  }
}

export function retweet(tweetId) {
  return function (dispatch) {
    return TweetsApi.retweet(tweetId)
      .then(({json, response}) => {
        if (json.action === 'create') {
          dispatch(retweetSuccess(json.retweet, json.retweet_tweet))
        } else if (json.action === 'delete') {
          dispatch(retweetDeletion(json.id, json.tweet_id))
        }
      })
      .catch((error) => error);
  }
}

function retweetSuccess(retweet, retweetTweet) {
  return {
    type: 'RETWEET_SUCCESS',
    retweet,
    retweetTweet
  }
}

function retweetDeletion(id, tweetId) {
  return {
    type: 'RETWEET_DELETION',
    id,
    tweetId
  }
}

export function fetchUsers() {
  return function(dispatch) {
    return UserApi.getUsers()
      .then(({json, response}) => dispatch(receiveUsers(json)))
      .catch((error) => error);
  }
}

function receiveUsers(users) {
  return {
    type: "RECEIVE_USERS",
    users
  };
}

function receiveCurrentUser(user) {
  return {
    type: "RECEIVE_CURRENT_USER",
    user
  }
}

export function fetchCurrentUser() {
  return function(dispatch) {
    return UserApi.getUser(parseJwt(sessionStorage.getItem('jwt')).user_id)
      .then(({json, response}) => dispatch(receiveCurrentUser(json)))
      .catch((error) => error);
  }
}


export function fetchRelationships() {
  return function(dispatch) {
    return RelationshipsApi.getAllRelationships()
      .then(({json, response}) => dispatch(receiveRelationships(json)))
      .catch((error) => error);
  }
}

function receiveRelationships(relationships) {
  return {
    type: 'RECEIVE_RELATIONSHIPS',
    relationships
  }
}

export function followUser(followedId) {
  return function(dispatch) {
    return RelationshipsApi.followUser(followedId)
      .then(({json, response}) => dispatch(followUserSuccess(json)))
      .catch((error) => error);
  }
}

function followUserSuccess(relationship) {
  return {
    type: "FOLLOW_USER_SUCCESS",
    relationship
  }
}

export function unfollowUser(unfollowedId) {
  return function(dispatch) {
    return RelationshipsApi.unfollowUser(unfollowedId)
      .then(({json, response}) => dispatch(unfollowUserSuccess(json.id)))
      .catch((error) => error);
  }
}

function unfollowUserSuccess(id) {
  return {
    type: "UNFOLLOW_USER_SUCCESS",
    id
  }
}
