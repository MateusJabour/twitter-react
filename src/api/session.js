import { serialize } from '../helper';
class SessionApi {
  static login(credentials) {
    const request = new Request('http://localhost:3000/auth/login', {
      method: 'POST',
      body: serialize(credentials)
    });

    return fetch(request).then(response =>
      response.json().then(json => ({ json, response }))
    ).catch(error => {
      return error;
    });
  }
}

export default SessionApi;
