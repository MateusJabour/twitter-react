export default {
  tweets: [],
  users: [],
  session: {
    isAuthenticated: !!sessionStorage.jwt,
    errorMessage: null
  }
};
