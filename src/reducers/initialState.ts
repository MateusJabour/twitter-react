import { All } from ".";

export default <All>{
  tweets: [],
  users: {},
  usersIsLoaded: false,
  tweetsIsLoaded: false,
  currentUserIsLoaded: false,
  relationshipsIsLoaded: false,
  retweetsIsLoaded: false,
  retweetTweetsIsLoaded: false,
  currentUser: {},
  relationships: [],
  retweets: [],
  retweetTweets: [],
  session: {
    isAuthenticated: !!sessionStorage.jwt,
    errorMessage: ''
  }
};
