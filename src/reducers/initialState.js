export default {
  tweets: null,
  users: null,
  currentUser: null,
  relationships: null,
  session: {
    isAuthenticated: !!sessionStorage.jwt,
    errorMessage: null
  }
};
