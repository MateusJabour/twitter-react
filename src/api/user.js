import API from './api';

class UserApi extends API {
  static signup(user) {
    return this.makeRequest('users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: this.requestHeaders(false)
    });
  }

  static getUsers() {
    return this.makeRequest('users', {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static getUser(id) {
    return this.makeRequest(`user/${id}`, {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }
}

export default UserApi;
