function users(state = [], action) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log(action.authToken);
      return state;
    case "RECEIVE_USERS":
      return action.users;
    default:
      return state;
  }
}

export default users;
