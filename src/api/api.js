class API {
  static requestHeaders(auth = true) {
    const request = {};

    request["CONTENT-TYPE"] = "application/json";
    if (auth) {
      request["AUTHORIZATION"] = `Bearer ${sessionStorage.jwt}`;
    }

    return request;
  }

  static makeRequest(url, options) {
    const request = new Request(url, options);

    return fetch(request).then(response =>
      response.json().then(json => ({ json, response }))
    ).catch(error => {
      return error;
    });
  }
}

export default API;
