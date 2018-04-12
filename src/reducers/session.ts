import { Action } from '../actions/index';

export type Session = {
  isAuthenticated: boolean,
  errorMessage: string
}

export function session(state : Session = {
  isAuthenticated: !!sessionStorage.jwt,
  errorMessage: ''
}, action : Action) : Session {
  switch(action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      sessionStorage.setItem('jwt', action.authToken);
      return Object.assign({}, state, {
        isAuthenticated: !!sessionStorage.jwt,
        errorMessage: ''
      });
    case "LOGIN_FAILED":
      return Object.assign({}, state, {
        errorMessage: action.message
      });
    case "LOGOUT_USER":
      sessionStorage.removeItem('jwt');
      return Object.assign({}, state, {
        isAuthenticated: !!sessionStorage.jwt,
        errorMessage: ''
      });
    default:
      return state;
  }
}
