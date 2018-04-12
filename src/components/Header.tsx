import * as React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedState, ConnectedDispatch } from '../types';

const Header : React.SFC<ConnectedState & ConnectedDispatch> = (props) => {
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
        <button onClick={() => props.logoutUser()}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
