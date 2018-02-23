export default {
  tweets: null,
  users: null,
  currentUser: null,
  session: {
    isAuthenticated: !!sessionStorage.jwt,
    errorMessage: null
  }
};
