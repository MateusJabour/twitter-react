import './sass/style.sass';

import * as React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Timeline from './components/Timeline';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleUser from './components/SingleUser';
import Users from './components/Users';

import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact strict path="/login" component={Login}></Route>
        <Route exact strict path="/signup" component={Signup}></Route>
        <Route exact strict path="/" render={(props) => {return <App {...props} children={Timeline}/>}}></Route>
        <Route exact strict path="/user/:id" render={(props) => {return <App {...props} children={SingleUser}/>}}></Route>
      </Switch>
    </ConnectedRouter>
  </Provider>
);


render(router, document.getElementById('root'));
