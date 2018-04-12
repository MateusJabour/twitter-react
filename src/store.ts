import * as redux from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { All } from './reducers/index';
import initialState from './reducers/initialState';

export const history = createBrowserHistory();

const store : redux.Store<All> = redux.createStore<All>(rootReducer, initialState, composeWithDevTools(
  redux.applyMiddleware(thunk, routerMiddleware(history)),
));

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
