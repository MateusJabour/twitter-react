import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';

class Signup extends React.Component {
  constructor() {
    super();

    this.signup = this.signup.bind(this);
  }

  componentWillMount () {
    console.log(this.props.session);
    if (this.props.session.isAuthenticated) {
      window.location.href = "/";
    }
  }

  signup(e) {
    e.preventDefault();
    const userInfo = {};

    Object.keys(this.refs).map((key, index) =>
       userInfo[key] = this.refs[key].value
    );

    this.props.signupUser(userInfo);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.signup}>
          <label htmlFor="">First Name</label>
          <input type="text" ref="first_name"/>
          <label htmlFor="">Last Name</label>
          <input type="text" ref="last_name"/>
          <label htmlFor="">Username</label>
          <input type="text" ref="username"/>
          <label htmlFor="">Email</label>
          <input type="email" ref="email"/>
          <label htmlFor="">Password</label>
          <input type="password" ref="password"/>
          <label htmlFor="">Confirm Password</label>
          <input type="password" ref="confirm_password"/>
          <input type="submit" value="Signup"/>
        </form>
        <Link to="/login">Login now</Link>
      </div>
  )
  }
}

export default Signup;
