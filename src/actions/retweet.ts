import * as redux from 'redux';
import RetweetsApi from '../api/retweets';
import { Retweet } from '../reducers/retweets';
import { Tweet } from '../reducers/tweets';

import { All } from '../reducers';
import { Thunk } from '../types';

export function fetchTimelineRetweets() : Thunk {
  return function (dispatch : redux.Dispatch<All>) {
    return RetweetsApi.getAllRetweets()
      .then(({json, response}) => dispatch(receiveRetweets(json.retweets, json.retweet_tweets)))
      .catch((error) => error);
  }
}

export function fetchUserRetweets(user_id : string) : Thunk {
  return function (dispatch : redux.Dispatch<All>) {
    return RetweetsApi.getUserRetweets(user_id)
      .then(({json, response}) => dispatch(receiveRetweets(json.retweets, json.retweet_tweets)))
      .catch((error) => error);
  }
}

function receiveRetweets(retweets : Retweet[], retweetTweets : Tweet[]) : RetweetAction {
  return {
    type: 'RECEIVE_RETWEETS',
    retweets,
    retweetTweets
  }
}

export function retweet(tweetId : string) : Thunk {
  return function (dispatch : redux.Dispatch<All>) {
    return RetweetsApi.retweet(tweetId)
      .then(({json, response}) => {
        if (json.action === 'create') {
          dispatch(retweetSuccess(json.retweet, json.retweet_tweet))
        } else if (json.action === 'delete') {
          dispatch(retweetDeletion(json.id, json.tweet_id))
        }
      })
      .catch((error) => error);
  }
}

function retweetSuccess(retweet : Retweet, retweetTweet : Tweet) : RetweetAction {
  return {
    type: 'RETWEET_SUCCESS',
    retweet,
    retweetTweet
  }
}

function retweetDeletion(id : string, tweetId : string) : RetweetAction {
  return {
    type: 'RETWEET_DELETION',
    id,
    tweetId
  }
}

export type RetweetAction = {
  type: 'RECEIVE_RETWEETS',
  retweets : Retweet[],
  retweetTweets : Tweet[]
} | {
  type: 'RETWEET_SUCCESS',
  retweet : Retweet,
  retweetTweet : Tweet
} |  {
  type: 'RETWEET_DELETION',
  id : string,
  tweetId : string
};
