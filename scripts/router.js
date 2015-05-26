//import routes from './routes';
import React from 'react';
import { Route } from 'react-router';
import App from './App';
import RepoPage from './pages/RepoPage';
import UserPage from './pages/UserPage';

import {
  create as createRouter,
  HistoryLocation,
  HashLocation
} from 'react-router';

var routes = (
  <Route name='explore' path='/' handler={App}>
    <Route name='repo' path='/:login/:name' handler={RepoPage} />
    <Route name='user' path='/:login' handler={UserPage} />
  </Route>
);

// Use hash location for Github Pages
// but switch to HTML5 history locally.
const location = process.env.NODE_ENV === 'production' ?
  HashLocation :
  HistoryLocation;

export default createRouter({ routes, location });
