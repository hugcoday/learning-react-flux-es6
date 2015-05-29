import React , { Component } from 'react';

export var ItemToggle extends Component {

  constructor( props ) {
  super( props );
  this.onClick = this.onClick.bind(this);
}

  onClick(type) {
    var item;

    switch (type) {
      case 'A':
        item = "Item A";
        break;
      case 'B':
        item = "Item B";
        break;
      default:
        throw new Error('Unimplemented type');
    }

    this.props.setActiveItem(item);
  }

  render () {
    return (
      <div>Select an Item:
        <ul>
          <li onClick={this.onClick.bind(this, 'A')}>Item A
          <li onClick={this.onClick.bind(this, 'B')}>Item B
        </ul>
      </div>
    );
  }
}
