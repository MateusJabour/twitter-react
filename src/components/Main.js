import React from 'react';

class Main extends React.Component {
  constructor() {
    super();

    this.renderTweet = this.renderTweet.bind(this);
  }

  renderTweet(tweet) {
    return (
      <div key={tweet.id}>
        <h1>{this.props.users.find((user) => user.id === tweet.user_id).name}</h1>
        <p>{tweet.text}</p>
        <small>{tweet.created_date}</small>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1 onClick={() => { this.props.logInUser({ email: 'ash@email.com', password: 'foobar' }) }}>Twitter</h1>
        {this.props.tweets.map((tweet) => this.renderTweet(tweet))}
      </div>
    )
  }
}

export default Main;
