import React from 'react';
import { Link } from 'react-router';

import sessionApi from '../api/session';

class Login extends React.Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
  }

  componentWillMount () {
    console.log(this.props.session);
    if (this.props.session.isAuthenticated) {
      window.location.href = "/";
    }
  }

  login(e) {
    e.preventDefault();

    const credentials = {};

    Object.keys(this.refs).map((key, index) =>
       credentials[key] = this.refs[key].value
    );

    this.props.loginUser(credentials);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label htmlFor="">Email</label>
          <input ref="email" type="text"/>
          <label htmlFor="">Password</label>
          <input ref="password" type="password"/>
          <input type="submit"/>
        </form>
        <h1>{this.props.session.errorMessage}</h1>
        <Link to="/signup">Sign up now</Link>
      </div>
    );
  }
}

export default Login;
