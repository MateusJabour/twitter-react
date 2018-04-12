import * as redux from 'redux';
import RelationshipsApi from '../api/relationships';
import { Relationship } from '../reducers/relationships';

import { All } from '../reducers';
import { Thunk } from '../types';

export function fetchRelationships() : Thunk {
  return function(dispatch : redux.Dispatch<All>) {
    return RelationshipsApi.getAllRelationships()
      .then(({json, response}) => dispatch(receiveRelationships(json)))
      .catch((error) => error);
  }
}

function receiveRelationships(relationships : Relationship[]) : RelationshipAction {
  return {
    type: 'RECEIVE_RELATIONSHIPS',
    relationships
  }
}

export function followUser(followedId : string) : Thunk {
  return function(dispatch : redux.Dispatch<All>) {
    return RelationshipsApi.followUser(followedId)
      .then(({json, response}) => dispatch(followUserSuccess(json)))
      .catch((error) => error);
  }
}

function followUserSuccess(relationship : Relationship) : RelationshipAction {
  return {
    type: "FOLLOW_USER_SUCCESS",
    relationship
  }
}

export function unfollowUser(unfollowedId : string) : Thunk {
  return function(dispatch : redux.Dispatch<All>) {
    return RelationshipsApi.unfollowUser(unfollowedId)
      .then(({json, response}) => dispatch(unfollowUserSuccess(json.id)))
      .catch((error) => error);
  }
}

function unfollowUserSuccess(id : string) : RelationshipAction {
  return {
    type: "UNFOLLOW_USER_SUCCESS",
    id
  }
}

export type RelationshipAction = {
  type: 'RECEIVE_RELATIONSHIPS',
  relationships: Relationship[]
} | {
  type: "FOLLOW_USER_SUCCESS",
  relationship : Relationship
} |  {
  type: 'UNFOLLOW_USER_SUCCESS',
  id : string,
};
