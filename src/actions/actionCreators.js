export function loginSuccess(authToken) {
  return {
    type: "LOGIN_SUCCESS",
    authToken
  };
}

export function loginFailed(message) {
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

export function addUser () {
  return {
    type: 'ADD_USER'
  }
}
