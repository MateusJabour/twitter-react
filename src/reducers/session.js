import sessionApi from '../api/session';
import {browserHistory} from 'react-router';

function session(state = [], action) {
  switch(action.type) {
    case "LOG_IN_USER":
      sessionApi.login(action.credentials).then(response => {
        sessionStorage.setItem('jwt', response.auth_token);
        browserHistory.push('/');
        return !!sessionStorage.auth_token;
      }).catch(error => {
        throw(error);
      });
    default:
      return state;
  }
  return state;
}

export default session;
