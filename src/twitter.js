import React from 'react';
import { render } from 'react-dom';

import css from './sass/style.sass';

import App from './components/App';
import Timeline from './components/Timeline';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleUser from './components/SingleUser';
import Users from './components/Users';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/" component={App}>
        <IndexRoute component={Timeline}/>
        <Route path="/users" component={Users}></Route>
        <Route path="/user/:id" component={SingleUser}></Route>
      </Route>
    </Router>
  </Provider>
);


render(router, document.getElementById('root'));
