import API from './api';

class RetweetsApi extends API {
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

export default RetweetsApi;
