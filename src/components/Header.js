import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="container header__container">
          <ul className="header__options">
            <li className="header__option"><Link to="/">Home</Link></li>
            <li className="header__option"><Link to="/users">Moments</Link></li>
            <li className="header__option"><Link to="/">Notifications</Link></li>
            <li className="header__option"><Link to="/">Messages</Link></li>
          </ul>
          <form action="">
            <input type="text"/>
          </form>
          <div className="header__profile">
            <img src="" alt=""/>
          </div>
          <button onClick={() => this.props.logoutUser()}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
