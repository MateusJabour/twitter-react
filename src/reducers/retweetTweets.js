export function retweetTweets(state = [], action) {
  switch (action.type) {
    case "RETWEET_SUCCESS":
      return [...state, action.retweetTweet];
    case "RETWEET_DELETION":
      const retweetTweetIndex = state.findIndex((retweetTweet) => retweetTweet.id === action.tweetId);
      if (retweetTweetIndex >= 0) {
        return state.length ? [
          ...state.slice(0, retweetTweetIndex),
          ...state.slice(retweetTweetIndex + 1),
        ] : [];
      } else {
        return state;
      }
    case "TWEET_DELETION_SUCCESS":
      const i = state.findIndex((retweetTweet) => retweetTweet.id === action.id);
      if (i >= 0) {
        return state.length ? [
          ...state.slice(0, i),
          ...state.slice(i + 1),
        ] : [];
      } else {
        return state;
      }
    case "RECEIVE_RETWEETS":
      return action.retweetTweets;
    default:
      return state;
  }
}

export function retweetTweetsIsLoaded(state = false, action) {
  switch (action.type) {
    case "RECEIVE_RETWEETS":
      return true;
    default:
      return state
  }
}
