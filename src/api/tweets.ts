import API from './api';

class TweetsApi extends API {
  static getAllTweets() {
    return this.makeRequest('tweets', {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static getUserTweets(user_id : string) {
    return this.makeRequest(`tweets/${user_id}`, {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static createTweet(text : string) {
    return this.makeRequest('tweets', {
      method: 'POST',
      headers: this.requestHeaders(),
      body: JSON.stringify({ text })
    });
  }

  static deleteTweet(id : string) {
    return this.makeRequest(`tweet/${id}/delete`, {
      method: 'POST',
      headers: this.requestHeaders()
    });
  }

  static getAllRetweets() {
    return this.makeRequest(`retweet`, {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static getUserRetweets(user_id : string) {
    return this.makeRequest(`retweet/${user_id}`, {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }

  static retweet(tweetId : string) {
    return this.makeRequest(`retweet/${tweetId}`, {
      method: 'POST',
      headers: this.requestHeaders()
    });
  }
}

export default TweetsApi;
