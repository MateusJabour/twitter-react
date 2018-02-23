import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';
import users from './users';
import session from './session';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  session,
  tweets,
  users,
  currentUser,
  routing: routerReducer
});

export default rootReducer;
