import * as relationshipActions from './relationship';
import * as tweetActions from './tweet';
import * as userActions from './user';
import * as sessionActions from './session';
import * as retweetActions from './retweet';
import { UserAction } from './user';
import { RelationshipAction } from './relationship';
import { TweetAction } from './tweet';
import { RetweetAction } from './retweet';
import { SessionAction } from './session';

export const actions = {
  ...relationshipActions,
  ...tweetActions,
  ...userActions,
  ...sessionActions,
  ...retweetActions,
}

export type Action = UserAction | RelationshipAction | RetweetAction | TweetAction | SessionAction;
