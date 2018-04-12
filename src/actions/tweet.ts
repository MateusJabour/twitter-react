import * as redux from 'redux';

import TweetsApi from '../api/tweets';

import { Tweet } from '../reducers/tweets';
import { All } from '../reducers';
import { Thunk } from '../types';

export function fetchTimelineTweets() : Thunk {
  return function (dispatch : redux.Dispatch<All>) {
    return TweetsApi.getAllTweets()
      .then(({json, response}) => dispatch(receiveTweets(json)))
      .catch((error) => error);
  }
}

export function fetchUserTweets(user_id : string) : Thunk {
  return function (dispatch : redux.Dispatch<All>) {
    return TweetsApi.getUserTweets(user_id)
      .then(({json, response}) => dispatch(receiveTweets(json)))
      .catch((error) => error);
  }
}

function receiveTweets(tweets : Tweet[]) : TweetAction {
  return {
    type: 'RECEIVE_TWEETS',
    tweets
  }
}

export function createTweet(text : string) : Thunk {
  return function (dispatch : redux.Dispatch<All>) {
    return TweetsApi.createTweet(text)
      .then(({json, response}) => dispatch(tweetCreationSuccess(json)))
      .catch((error) => error);
  }
}

function tweetCreationSuccess(tweet : Tweet) : TweetAction {
  return {
    type: 'TWEET_CREATION_SUCCESS',
    tweet
  }
}

export function deleteTweet(id : string) : Thunk {
  return function (dispatch : redux.Dispatch<All>) {
    return TweetsApi.deleteTweet(id)
      .then(({json, response}) => dispatch(tweetDeletionSuccess(json.id)))
      .catch((error) => error);
  }
}

function tweetDeletionSuccess(id : string) : TweetAction {
  return {
    type: 'TWEET_DELETION_SUCCESS',
    id
  }
}

export type TweetAction = {
  type: 'RECEIVE_TWEETS',
  tweets : Tweet[]
} | {
  type: 'TWEET_CREATION_SUCCESS',
  tweet : Tweet
} |  {
  type: 'TWEET_DELETION_SUCCESS',
  id : string
};
