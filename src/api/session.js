import { serialize } from '../helper';
class SessionApi {
  static login(credentials) {
    console.log(credentials);

    const request = new Request('http://localhost:3000/auth/login', {
      method: 'POST',
      body: serialize(credentials)
    });

    console.log(request);

    return fetch(request).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      console.log(error);
      return error;
    });
  }
}

export default SessionApi;
