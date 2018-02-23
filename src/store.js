import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import { fetchTweets, fetchUsers, fetchCurrentUser } from './actions/actionCreators'

import rootReducer from './reducers/index';
import initialState from './reducers/initialState';


const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

if (store.getState().session.isAuthenticated) {
  store.dispatch(fetchTweets());
  store.dispatch(fetchUsers());
  store.dispatch(fetchCurrentUser());
}

export default store;
