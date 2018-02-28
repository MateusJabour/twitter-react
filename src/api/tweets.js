import API from './api';

class TweetsApi extends API {
  static getAllTweets() {
    return this.makeRequest('tweets', {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static createTweet(text) {
    return this.makeRequest('tweets', {
      method: 'POST',
      headers: this.requestHeaders(),
      body: JSON.stringify({ text })
    });
  }

  static deleteTweet(id) {
    return this.makeRequest(`tweet/${id}/delete`, {
      method: 'POST',
      headers: this.requestHeaders()
    });
  }
}

export default TweetsApi;
