import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Footer extends Component  {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor( props ) {
  super( props );
  this.state = {};
}

static contextTypes = {

}

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { user } = this.props;

    return (
        <div className="row">
            <hr width="100%"></hr>
            <p className="flat">foot content here </p>
        </div>

    );
  }
}
