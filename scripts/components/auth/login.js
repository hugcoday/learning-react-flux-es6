


/*
var token = {
  userId: 101,
  userName: 'test'
};

localStorage.setItem('token', JSON.stringify(token));


*/


import React, {Component } from 'react';
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;


export class Login extends Component {

  static contextTypes = {
    router: PropTypes.func.isRequired
  };


  constructor (props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
    this.state = {
      error: false
    };
  }

  _handleSubmit (event) {
    event.preventDefault();
    var { router } = this.context;
    var nextPath = router.getCurrentQuery().nextPath;
    var email = this.refs.email.getDOMNode().value;
    var pass = this.refs.pass.getDOMNode().value;


    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true });
      if (nextPath) {
        router.replaceWith(nextPath);
      } else {
        router.replaceWith('/about');
      }
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com"/></label>
        <label><input ref="pass" placeholder="password"/></label> (hint: password1)<br/>
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};
