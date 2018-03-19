export function retweets(state = [], action) {
  switch (action.type) {
    case "RETWEET_SUCCESS":
      return [...state, action.retweet];
    case "RETWEET_DELETION":
      const retweetIndex = state.findIndex((retweet) => retweet.id === action.id);
      if (retweetIndex >= 0) {
        return state.length ? [
          ...state.slice(0, retweetIndex),
          ...state.slice(retweetIndex + 1),
        ] : [];
      } else {
        return state;
      }
    case "TWEET_DELETION_SUCCESS":
      const i = state.findIndex((retweet) => retweet.tweet_id === action.id);
      if (i >= 0) {
        return state.length ? [
          ...state.slice(0, i),
          ...state.slice(i + 1),
        ] : [];
      } else {
        return state;
      }
    case "RECEIVE_RETWEETS":
      return action.retweets;
    default:
      return state;
  }
}

export function retweetsIsLoaded(state = false, action) {
  switch (action.type) {
    case "RECEIVE_RETWEETS":
      return true;
    default:
      return state
  }
}
