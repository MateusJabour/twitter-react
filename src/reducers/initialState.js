import tweets from '../data/tweets';
import users from '../data/users';

export default {
  tweets,
  users,
  session: {
    isAuthenticated: !!sessionStorage.jwt,
    errorMessage: null
  }
};
