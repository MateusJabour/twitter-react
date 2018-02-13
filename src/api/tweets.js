class TweetsApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllTweets() {
    const request = new Request('http://localhost:3000/tweets', {
      method: 'GET',
      headers: this.requestHeaders();
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createTweet(text) {
    const request = new Request('http://localhost:3000/tweets', {
      method: 'POST',
      headers: this.requestHeaders();,
      body: serialize({ text: text })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default TweetsApi;
