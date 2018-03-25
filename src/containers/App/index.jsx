/* @flow */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../views/Home/';
import logo from '../../assets/img/logo.svg';
import './App.css';
import config from '../../config';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{config.app.title}</h1>
    </header>
    <p className="App-intro">
      <Switch>
        <Route path="/home" name="Home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </p>
  </div>
);

export default App;
