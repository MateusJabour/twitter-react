function tweets(state = [], action) {
  switch (action.type) {
    case "CREATE_TWEET":
      return [...state, action.tweet];
    case "RECEIVE_TWEETS":
      return action.tweets;
    default:

  }
  return state;
}

export default tweets;
