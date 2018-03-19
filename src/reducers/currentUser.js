export function currentUser(state = [], action) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
    case "RECEIVE_CURRENT_USER":
      return action.user;
    default:
      return state;
  }
}

export function currentUserIsLoaded(state = false, action) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
    case "RECEIVE_CURRENT_USER":
      return true;
    default:
      return state
  }
}
