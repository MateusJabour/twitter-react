import { Action } from '../actions/index';

export type User = {
  id: string,
  first_name: string,
  last_name: string,
  username: string,
  email: string
}

export type UserGroup = {
  [key: string] : User
}

export function users(state : UserGroup = {}, action : Action) : UserGroup {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      state[action.user.id] = action.user;
      return state;
    case "RECEIVE_USERS":
      return action.users;
    default:
      return state;
  }
}

export function usersIsLoaded(state = false, action : Action) : boolean {
  switch (action.type) {
    case "RECEIVE_USERS":
      return true;
    default:
      return state
  }
}
