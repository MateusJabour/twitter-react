import API from './api';

class SessionApi extends API {
  static login(credentials : { email: string, password: string }) {
    return this.makeRequest('auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: this.requestHeaders(false)
    });
  }
}

export default SessionApi;
