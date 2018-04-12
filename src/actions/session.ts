import * as redux from 'redux';
import SessionApi from '../api/session';
import { parseJwt } from '../helpers';

import { All } from '../reducers';
import { Thunk } from '../types';

function loginSuccess(authToken : string) : SessionAction {
  return {
    type: "LOGIN_SUCCESS",
    authToken
  };
}

function loginFailed(message : string) : SessionAction {
  return {
    type: "LOGIN_FAILED",
    message
  };
}

export function logoutUser() : SessionAction {
  return {
    type: "LOGOUT_USER"
  };
}

export function loginUser(credentials : { email: string, password: string }) : Thunk {
  return function(dispatch : redux.Dispatch<All>) {
    return SessionApi.login(credentials).then(({ json, response }) => {
      if (response.ok) {
        dispatch(loginSuccess(json.auth_token));
      } else {
        dispatch(loginFailed(json.message));
      }
    });
  }
}


export type SessionAction = {
  type: "LOGIN_SUCCESS",
  authToken : string
} | {
  type: "LOGIN_FAILED",
  message: string
} |  {
  type: "LOGOUT_USER"
};
