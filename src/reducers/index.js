import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';
import users from './users';
import session from './session';

const rootReducer = combineReducers({ session, tweets, users, routing: routerReducer });

export default rootReducer;
