import React, { Component, PropTypes } from 'react';


var ActiveItemPanel = require('./active-item-panel');

export class  DummyWrapper extends Component {

constructor( props ) {
  super( props );

}
 render() {
    return <ActiveItemPanel />;
  }
}
