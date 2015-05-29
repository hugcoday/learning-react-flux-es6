import React, { Component, PropTypes } from 'react';


export default class ActiveItemPanel extends Component {

  static   contextTypes =  {
      activeItem: PropTypes.any
    };

  constructor( props ) {
  super( props );

  }

    render() {
      return (
        <div>
          Active Item: {this.context.activeItem}
        </div>
      );
    }
}
