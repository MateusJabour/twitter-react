import React from 'react';
import Header from './Header';
import Login from './Login';
import Timeline from './Timeline';

class Main extends React.Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    return this.props.session.isAuthenticated ? <Header {...this.props} /> : null;
  }

  render () {
    return (
        <div>
          {this.renderHeader()}
          {React.cloneElement(this.props.children, this.props)}
        </div>
      )
  }
}

export default Main;