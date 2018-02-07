export function loginSuccess() {
  return {type: "LOG_IN_SUCCESS"};
}

export function logInUser(credentials) {
  return {
    type: "LOG_IN_USER",
    credentials
  };
}

export function addUser () {
  return {
    type: 'ADD_USER'
  }
}
