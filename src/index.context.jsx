import React from 'react';

// withContext change to  getChildContext 
var A = React.createClass({

    contextTypes: {
        name: React.PropTypes.string.isRequired,
    },

    render: function() {
        return <div>My name is: {this.context.name}</div>;
    }
});

React.withContext({'name': 'Jonas'}, function () {
    // Outputs: "My name is: Jonas"
    React.render(<A />, document.body);
});


var A = React.createClass({

    render: function() {
         return <B />;
    }
});

var B = React.createClass({

    contextTypes: {
        name: React.PropTypes.string
    },

    render: function() {
        return <div>My name is: {this.context.name}</div>;
    }
});

React.withContext({'name': 'Jonas'}, function () {
   React.render(<A />, document.body);
});
