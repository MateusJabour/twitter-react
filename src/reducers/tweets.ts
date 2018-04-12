import { Action } from '../actions/index';

export type Tweet = {
  id: string,
  text: string,
  user_id: string,
  created_at: string
}

export function tweets(state : Tweet[] = [], action : Action) : Tweet[] {
  switch (action.type) {
    case "TWEET_CREATION_SUCCESS":
      return [ action.tweet, ...state];
    case "TWEET_DELETION_SUCCESS":
      const tweetIndex = state.findIndex((tweet : Tweet) => tweet.id === action.id);
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

export function tweetsIsLoaded(state = false, action : Action) : boolean {
  switch (action.type) {
    case "RECEIVE_TWEETS":
      return true;
    default:
      return state
  }
}
