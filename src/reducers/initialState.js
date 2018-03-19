export default {
  tweets: null,
  users: null,
  usersIsLoaded: false,
  tweetsIsLoaded: false,
  currentUserIsLoaded: false,
  relationshipsIsLoaded: false,
  retweetsIsLoaded: false,
  retweetTweetsIsLoaded: false,
  currentUser: null,
  relationships: null,
  retweets: null,
  retweetTweets: null,
  session: {
    isAuthenticated: !!sessionStorage.jwt,
    errorMessage: null
  }
};
