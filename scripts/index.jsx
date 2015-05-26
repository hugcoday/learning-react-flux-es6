import './index.html';

import React from 'react';
import router from './router';

const rootEl = document.getElementById('app');
router.run((Handler, state) =>
  React.render(<Handler {...state} />, rootEl)
);
