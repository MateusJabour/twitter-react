import * as React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions/index';

import sessionApi from '../api/session';
import { redirectAuth } from '../helpers';
import { Session } from '../reducers/session';
import { All } from '../reducers';
import { Thunk } from '../types';

interface ConnectedDispatch {
  loginUser: (credentials : { email: string, password: string }) => Thunk
}

interface ConnectedState {
  session : Session;
  history: any;
}

class LoginComponent extends React.Component<ConnectedDispatch & ConnectedState, {}> {
  constructor(props : ConnectedDispatch & ConnectedState) {
    super(props);

    this.login = this.login.bind(this);
  }

  componentWillMount() {
    redirectAuth(this.props);
  }

  componentWillReceiveProps(nextProps : ConnectedDispatch & ConnectedState) {
    redirectAuth(nextProps);
  }

  login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const credentials : { [key : string]: string, email: string, password: string } = {
      email: '',
      password: ''
    };

    Object.keys(this.refs).map((key, index) => {
      let input = this.refs[key]as  HTMLInputElement
      credentials[key] = input.value;
    });

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

function mapStateToProps(state : All) {
  return {
    session: state.session
  };
}

function mapDispatchToProps(dispatch : Dispatch<All>) : ConnectedDispatch {
  return bindActionCreators({ loginUser: actions.loginUser }, dispatch);
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
