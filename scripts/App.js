import React, { PropTypes, Component } from 'react';
import Explore from './components/Explore';
import DocumentTitle from 'react-document-title';
import { RouteHandler } from 'react-router';

export default class App {
  static propTypes = {
    params: PropTypes.object.isRequired,  // URL paramers chains
    query: PropTypes.object.isRequired    // query ??
  };

  render() {
    return (
        <DocumentTitle title='Entry'>
          <div className='App'>
            <Explore {...this.props} />
            <hr />
            <RouteHandler {...this.props} />
          </div>
        </DocumentTitle>
    );
  }
}
