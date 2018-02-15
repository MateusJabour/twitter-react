import { serialize } from '../helper';

class UserApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static signup(user) {
    const request = new Request('http://localhost:3000/signup', {
      method: 'POST',
      body: serialize(user)
    });

    return fetch(request).then(response =>
      response.json().then(json => ({ json, response }))
    ).catch(error => {
      return error;
    });
  }

  static getUsers() {
    const request = new Request('http://localhost:3000/users', {
      method: 'GET',
      headers: this.requestHeaders()
    });

    return fetch(request).then(response =>
      response.json().then(json => ({ json, response }))
    ).catch(error => {
      return error;
    });
  }
}

export default UserApi;
