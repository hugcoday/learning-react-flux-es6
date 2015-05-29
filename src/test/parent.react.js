import React, { Component, PropTypes } form 'react';


import DummyWrapper from './DummyWrapper.react';
import ItemToole from './ItemToole.react';


class Parent extends Component {

constructor ( props ) {
  super( props );

  this.getChildContext = this.getChildContext.bind(this );

  this.state = {
    activeItem: nul
  }
}


 static   childContextTypes =  {
    activeItem: PropTypes.any
  };
  getChildContext () {
    return {
      activeItem: this.state.activeItem
    };
  }

  setActiveItem (item) {
    this.setState({activeItem: item});
  }

  render () {
    return (
      <div>
        <ItemToggle setActiveItem={this.setActiveItem} />
        <DummyWrapper />
      </div>
    );
  }
}
