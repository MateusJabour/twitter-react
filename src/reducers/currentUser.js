function currentUser(state = [], action) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
    case "RECEIVE_CURRENT_USER":
      return action.user;
    default:
      return state;
  }
}

export default currentUser;
