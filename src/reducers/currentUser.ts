import { User } from './users';
import { Action } from '../actions/index';

export function currentUser(state : User | {} = {}, action : Action) : User | {} {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
    case "RECEIVE_CURRENT_USER":
      return action.user;
    default:
      return state;
  }
}

export function currentUserIsLoaded(state = false, action : Action) : boolean {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
    case "RECEIVE_CURRENT_USER":
      return true;
    default:
      return state
  }
}
