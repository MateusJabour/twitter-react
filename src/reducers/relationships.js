export function relationships(state = [], action) {
  switch (action.type) {
    case "RECEIVE_RELATIONSHIPS":
      return action.relationships;
    case "FOLLOW_USER_SUCCESS":
      return [...state, action.relationship]
    case "UNFOLLOW_USER_SUCCESS":
      const relationshipIndex = state.findIndex((relationship) => relationship.id === action.id);
      if (relationshipIndex >= 0) {
        return state.length ? [
          ...state.slice(0, relationshipIndex),
          ...state.slice(relationshipIndex + 1),
        ] : [];
      } else {
        return state;
      }
    default:
      return state;
  }
}

export function relationshipsIsLoaded(state = false, action) {
  switch (action.type) {
    case "RECEIVE_RELATIONSHIPS":
      return true;
    default:
      return state
  }
}
