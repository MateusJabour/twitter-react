import React from 'react'
import { Link } from 'react-router';

import { redirectAuth } from '../helpers';

class Signup extends React.Component {
  constructor() {
    super();

    this.signup = this.signup.bind(this);
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

  signup(e) {
    e.preventDefault();
    const userInfo = {};

    Object.keys(this.refs).map((key, index) => {
      userInfo[key] = this.refs[key].value;
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

export default Signup;
