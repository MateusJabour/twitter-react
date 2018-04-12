import * as React from 'react'
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../actions/index';
import { redirectAuth } from '../helpers';
import { Session } from '../reducers/session';
import { User } from '../reducers/users';
import { All } from '../reducers';
import { UserInformation } from '../types';
import { ThunkAction } from 'redux-thunk';


interface ConnectedDispatch {
  signupUser: (user: UserInformation) => ThunkAction<void, All,  Promise<void>>;
}

interface ConnectedState {
  session : Session;
  history: any;
}

class SignupComponent extends React.Component<ConnectedState & ConnectedDispatch, {}> {
  constructor(props : ConnectedState & ConnectedDispatch) {
    super(props);

    this.signup = this.signup.bind(this);
  }

  componentWillMount() {
    redirectAuth(this.props);
  }

  componentWillReceiveProps(nextProps : ConnectedState & ConnectedDispatch) {
    redirectAuth(nextProps);
  }

  signup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userInfo : UserInformation = {
      first_name : '',
      last_name : '',
      username : '',
      email : '',
      password : '',
      confirm_password : '',
    };

    Object.keys(this.refs).map((key, index) => {
      let input = this.refs[key] as HTMLInputElement;
      userInfo[key] = input.value;
    });

    this.props.signupUser(userInfo);
  }

  render () {
    return (
      <div className="signup">
        <div className="form__container">
          <form onSubmit={this.signup} className="form">
            <label htmlFor="" className="form__label">First Name</label>
            <input type="text" ref="first_name" className="form__field"/>
            <label htmlFor="" className="form__label">Last Name</label>
            <input type="text" ref="last_name" className="form__field"/>
            <label htmlFor="" className="form__label">Username</label>
            <input type="text" ref="username" className="form__field"/>
            <label htmlFor="" className="form__label">Email</label>
            <input type="email" ref="email" className="form__field"/>
            <label htmlFor="" className="form__label">Password</label>
            <input type="password" ref="password" className="form__field"/>
            <label htmlFor="" className="form__label">Confirm Password</label>
            <input type="password" ref="confirm_password" className="form__field"/>
            <button type="submit" className="form__submit-button">Submit</button>
          </form>
          <Link to="/login">Login now</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state : All) {
  return {
    session: state.session
  };
}

function mapDispatchToProps(dispatch : Dispatch<All>) : ConnectedDispatch {
  return bindActionCreators({ signupUser: actions.signupUser }, dispatch);
}

const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);

export default Signup;
