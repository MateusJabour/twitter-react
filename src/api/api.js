class API {
  static requestHeaders(auth = true) {
    const request = {};

    request["CONTENT-TYPE"] = "application/json";
    if (auth) {
      request["AUTHORIZATION"] = `Bearer ${sessionStorage.jwt}`;
    }

    return request;
  }

  static makeRequest(route, options) {
    const request = new Request(`http://localhost:3000/${route}`, options);

    return fetch(request).then(response =>
      response.json().then(json => ({ json, response }))
    ).catch(error => {
      return error;
    });
  }
}

export default API;
