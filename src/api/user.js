import API from './api';

class UserApi extends API {
  static signup(user) {
    return this.makeRequest('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: this.requestHeaders(false)
    });
  }

  static getUsers() {
    return this.makeRequest('http://localhost:3000/users', {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static getUser(id) {
    return this.makeRequest(`http://localhost:3000/user/${id}`, {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }
}

export default UserApi;
