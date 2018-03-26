/* @flow */

import fp from 'lodash/fp';

import type { Home, Action } from '../types';

type State = Home;

const initialState = {
  readyStatus: 'USERS_INVALID',
  err: null,
  user: {},
  home: null
};

export default (state: State = initialState, action: Action): State => {
  console.log('action.type', action.type);
  switch (action.type) {
    case 'USER_REQUESTING':
      return fp.assign(state, {
        readyStatus: 'USER_REQUESTING'
      });
    case 'USER_FAILURE':
      return fp.assign(state, {
        readyStatus: 'USER_FAILURE',
        err: action.err
      });
    case 'USER_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'USER_SUCCESS',
        user: action.data
      });
    default:
      return state;
  }
};
