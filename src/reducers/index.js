/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';

const reducers = {
  home,
  router
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
