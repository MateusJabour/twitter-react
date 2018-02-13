import React from 'react';

import sessionApi from '../api/session';

class Login extends React.Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();

    const credentials = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };

    sessionApi.login(credentials).then(({ json, response }) => {
      if (response.ok) {
        this.props.loginSuccess(json.auth_token);
      } else {
        this.props.loginFailed(json.message);
      }
    });
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
      </div>
    );
  }
}

export default Login;
