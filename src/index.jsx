import './index.html';
var css = require( '!style!css!less!./styles/bootstrap-3.3.4/less/bootstrap.less');

import React from 'react';
import router from './scripts/router';

const rootEl = document.getElementById('app');
router.run((Handler, state) =>
  React.render(<Handler {...state} />, rootEl)
);
