import * as React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedState, ConnectedDispatch } from '../types';

const Users : React.SFC<ConnectedState & ConnectedDispatch> = (props) => {
  return(
    <div>
      {Object.keys(props.users).map(userID => <Link to={`user/${userID}`}>{props.users[userID].username}</Link>)}
    </div>
  )
}

export default Users;
