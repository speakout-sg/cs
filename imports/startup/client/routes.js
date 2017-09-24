import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import App from '../../ui/template/App.jsx';
import CreateApp from '../../ui/components/create/App.jsx';
import LibraryApp from '../../ui/components/library/App.jsx';
import TransposeApp from '../../ui/components/transpose/App.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/create" component={CreateApp}/>
      <Route exact path="/library" component={LibraryApp}/>
      <Route exact path="/transpose" component={TransposeApp}/>
    </div>
  </Router>
);