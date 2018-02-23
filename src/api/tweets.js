import API from './api';

class TweetsApi extends API {
  static getAllTweets() {
    return this.makeRequest('http://localhost:3000/tweets', {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static createTweet(text) {
    return this.makeRequest('http://localhost:3000/tweets', {
      method: 'POST',
      headers: this.requestHeaders(),
      body: JSON.stringify({ text })
    });
  }
}

export default TweetsApi;
