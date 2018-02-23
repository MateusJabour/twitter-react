import API from './api';

class SessionApi extends API {
  static login(credentials) {
    return this.makeRequest('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: this.requestHeaders(false)
    });
  }
}

export default SessionApi;
