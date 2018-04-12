import * as redux from 'redux';
import UserApi from '../api/user';
import { parseJwt } from '../helpers';
import { User, UserGroup } from '../reducers/users';

import { All } from '../reducers';
import { UserInformation, Thunk } from '../types';

export function signupUser(user : UserInformation) : Thunk {
  return function(dispatch : redux.Dispatch<All>) {
    return UserApi.signup(user).then(({ json, response}) => {
      if (response.ok) {
        dispatch(signupSuccess(json.auth_token, json.user))
      } else {
        dispatch(signupFailed(json.message))
      }
    })
  }
}

function signupSuccess(authToken : string, user : User) : UserAction {
  return {
    type: 'SIGNUP_SUCCESS',
    authToken,
    user
  }
}

function signupFailed(message : string) : UserAction {
  return {
    type: 'SIGNUP_FAILED',
    message
  }
}


export function fetchUsers() : Thunk {
  return function(dispatch : redux.Dispatch<All>) {
    return UserApi.getUsers()
      .then(({json, response}) => dispatch(receiveUsers(json)))
      .catch((error) => error);
  }
}


function receiveUsers(users : UserGroup) : UserAction {
  return {
    type: "RECEIVE_USERS",
    users
  };
}

export function fetchCurrentUser() : Thunk {
  return function(dispatch : redux.Dispatch<All>) {
    const jwt = sessionStorage.getItem('jwt') || '';
    return UserApi.getUser(parseJwt(jwt).user_id)
    .then(({json, response}) => dispatch(receiveCurrentUser(json)))
    .catch((error) => error);
  }
}

function receiveCurrentUser(user : User) : UserAction {
  return {
    type: "RECEIVE_CURRENT_USER",
    user
  }
}

export type UserAction = {
  type: 'SIGNUP_SUCCESS',
  authToken : string,
  user : User
} | {
  type: 'SIGNUP_FAILED',
  message : string
} | {
  type: "RECEIVE_USERS",
  users : UserGroup
} |  {
  type: "RECEIVE_CURRENT_USER",
  user : User
}
