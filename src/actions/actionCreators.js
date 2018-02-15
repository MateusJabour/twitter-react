import TweetsApi from '../api/tweets';
import SessionApi from '../api/session';
import UserApi from '../api/user';

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
        dispatch(fetchTweets());
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
        dispatch(signupSuccess(json.auth_token))
      } else {
        dispatch(signupFailed(json.message))
      }
    })
  }
}

function signupSuccess(authToken) {
  return {
    type: 'SIGNUP_SUCCESS',
    authToken
  }
}

function signupFailed(message) {
  return {
    type: 'SIGNUP_FAILED',
    message
  }
}

export function createTweet(tweet) {
  return {
    type: 'CREATE_TWEET',
    tweet
  }
}

export function receiveTweets(tweets) {
  return {
    type: 'RECEIVE_TWEETS',
    tweets
  }
}

export function fetchTweets() {
  return function(dispatch) {
    return TweetsApi.getAllTweets()
      .then(({json, response}) => dispatch(receiveTweets(json)))
      .catch((error) => error);
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
