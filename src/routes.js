// src/routes.js

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';

import Home from './pages/Home';
import Tarifs from './pages/Tarifs';
import Horaires from './pages/Horaires';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Creations from './pages/Creations';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-75749827-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const Routes = (props) => (
  <Router {...props} onUpdate={logPageView}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tarifs" component={Tarifs} />
      <Route path="horaires" component={Horaires} />
      <Route path="contact" component={Contact} />
      <Route path="creations" component={Creations} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
