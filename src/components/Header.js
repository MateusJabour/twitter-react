import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <ul className="header__options">
          <li className="header__option">Home</li>
          <li className="header__option">Moments</li>
          <li className="header__option">Notifications</li>
          <li className="header__option">Messages</li>
        </ul>
        <form action="">
          <input type="text"/>
        </form>
        <div className="header__profile">
          <img src="" alt=""/>
        </div>
        <button onClick={() => this.props.logoutUser()}>Logout</button>
        <button>Tweet</button>
      </div>
    );
  }
}

export default Header;
