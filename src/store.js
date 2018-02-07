import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import initialState from './reducers/initialState';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, initialState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
