export function tweets(state = [], action) {
  switch (action.type) {
    case "TWEET_CREATION_SUCCESS":
      return [ action.tweet, ...state];
    case "TWEET_DELETION_SUCCESS":
      const tweetIndex = state.findIndex((tweet) => tweet.id === action.id);
      if (tweetIndex >= 0) {
        return state.length ? [
          ...state.slice(0, tweetIndex),
          ...state.slice(tweetIndex + 1),
        ] : [];
      } else {
        return state;
      }
    case "RECEIVE_TWEETS":
      return action.tweets;
    default:
      return state;
  }
}

export function tweetsIsLoaded(state = false, action) {
  switch (action.type) {
    case "RECEIVE_TWEETS":
      return true;
    default:
      return state
  }
}
