

import React , { Component , PropTypes } form 'react';



export default PropsExample extends Component {

  constructor( props ) {
    super( props );
    this.state = {

      };

  }
//******************************************************************************
  render() {
      var props = { bar: false };
      if (shouldUseFoo) {
        props.foo = 10;
        props.bar = true;
      }
      return <Foo {...props} />;

  }
}


//******************************************************************************
var element1 = <Foo />; // extra prop is optional
var element2 = React.addons.cloneWithProps(element1, { extra: 'prop' });



//******************************************************************************
var Hello = React.createClass({
  statics: {
    foo () {
      this.bar();  // v0.13では呼べない
    },
    bar() {
      console.log("bar");
    }
  },
  render() {
    return <div>hello <button onClick={Hello.foo}>click</button></div>;
  }
});


//******************************************************************************

console.log(this.state.count) // 0
this.setState({ count: this.state.count + 1 })
this.setState({ count: this.state.count + 1 })
// state.count will render as 1

console.log(this.state.count) // 0
this.setState(function(state, props) { return { count: state.count + 1 } });
this.setState(function(state, props) { return { count: state.count + 1 } });
// state.count will render as 2


//******************************************************************************

<Photo ref={(c) => this._photo = c} />



  //****************************************************************************
  var Parent = React.createClass({
      childContextTypes: {
        name: React.PropTypes.string,
        age: React.PropTypes.number
      },
      getChildContext: function() {
        return {
          name: "parent",
          age: 50
        };
    },
    render: function() {
      return <Child />;
    }
  });

  var Child = React.createClass({
      contextTypes: {
        name: React.PropTypes.string,
        age: React.PropTypes.number
      },
      componentDidMount: function() {
        console.log("Child",this.context); // {name: "parent", age: 50}
      },
      render: function() {
        return <GrandChild />;
      }
  });

  var GrandChild = React.createClass({
      contextTypes: {
        name: React.PropTypes.string
      },
      componentDidMount: function() {
        console.log("GrandChild",this.context); // {name: "parent"}
      },
      render: function() {
        return <div>hello</div>;
      }
  });

  React.render(<Parent />, document.body);


  //****************************************************************************
  var React = require('react');

  var contextTypes = {
    name: React.PropTypes.string
  };

  class Test extends React.Component {

    constructor(props, context) {
      super(props, context);
      this.state = {name: 'Name!'};
    }

    getChildContext() {
      return {name: this.state.name};
    }

    render() {
      return <div />;
    }
  }
  Test.childContextTypes = contextTypes;

  console.log(React.renderToString(<Test />));


//  Now that works, sorry.
//https://github.com/facebook/react/issues/2929

  //****************************************************************************

  //****************************************************************************

  //****************************************************************************

  //****************************************************************************
