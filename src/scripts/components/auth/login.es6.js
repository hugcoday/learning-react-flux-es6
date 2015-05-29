import React, { Component, PropTypes } from 'react';
//import  Router , { Route, RouteHandler, Link } from 'react-router';
import Router from 'react-router';

export default class Login extends Component {

  static propTypes = {
    /*
    login: PropTypes.string.isRequired,
    password: PropType.string.isRequired,
    token: PropType.string.isRequired
    */
    authorization: PropType.object.isRequired

   /*
    authorization = {
      login: ' login_account',
      password: 'login_password',
      screct: 'veritied_code'
    }
    token = {
      raw: 'token_raw_string',
      valid: 'token_valid_or_not_status',
      method: 'JWT_encode_method'
      }
    */
}

  constructor (props,context) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false,
      loggedIn: false
    };
  }

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  handleSubmit (event) {
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
      <div>
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com"/></label>
        <label><input ref="pass" placeholder="password"/></label> (hint: password1)<br/>
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
      </div>
    );
  }
}
