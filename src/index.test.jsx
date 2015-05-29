import './index.html';

/*
import React from 'react';
import router from './router';

const rootEl = document.getElementById('app');
router.run((Handler, state) =>
  React.render(<Handler {...state} />, rootEl)
);

*/
import   'core-js/es6/promise';
import   'whatwg-fetch';

var jwt = require('jwt-simple');
var payload = { ID: 'Christopher' };
var secret = 'unicornsAreAwesome';

// encode
var token = jwt.encode(payload, secret,"HS256");
console.log( "token: " + token);
console.log("\n");

// decode
var decoded = jwt.decode(token, secret);
console.log(decoded); //=> { foo: 'bar' }



var url = "http://localhost:8080/api/";

fetch(url).then(response =>
  response.json().then(json => {
    let token = json.token;
    console.log("token\n");
    console.log( token );
    decoded = jwt.decode(token, secret);
    console.log(decoded); //=> { foo: 'bar' }


  }));
