import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Containers
import App from './containers/App';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
