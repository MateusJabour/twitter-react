import React from 'react';
import { Link } from 'react-router';

import sessionApi from '../api/session';
import { redirectAuth } from '../helpers';

class Login extends React.Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    redirectAuth(nextProps);
  }

  componentWillUpdate() {
    redirectAuth(this.props);
  }

  componentWillMount() {
    redirectAuth(this.props);
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
      <div className="login">
        <div className="form__container">
          <form onSubmit={this.login} className="form">
            <label htmlFor="email" className="form__label">Email</label>
            <input ref="email" type="text" className="form__field" id="email"/>
            <label htmlFor="password" className="form__label">Password</label>
            <input ref="password" type="password" className="form__field" id="password"/>
            <button type="submit" className="form__submit-button">Submit</button>
            <small>{this.props.session.errorMessage}</small>
          </form>
          <Link to="/signup">Sign up now</Link>
        </div>
      </div>
    );
  }
}

export default Login;
