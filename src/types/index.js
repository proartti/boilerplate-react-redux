/* @flow */
/* eslint-disable no-use-before-define */

import type { Store as ReduxStore } from 'redux';

import type { Reducers } from '../reducers';

// Reducers
export type Home = {
  +readyStatus: string,
  +err: any,
  +user: Object,
  +home: any
};

export type UserInfo = {
  +login: string,
  +avatar_url: string,
  +name: string,
  +company: string,
  +blog: string,
  +location: string,
  +email: string,
  +bio: string,
  +public_repos: string,
  +created_at: any
};

// State
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V; // eslint-disable-line no-undef
export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>; // eslint-disable-line no-undef

// Action
export type Action =
  | { type: 'USERS_REQUESTING' }
  | { type: 'USERS_SUCCESS', data: Array<Object> }
  | { type: 'USERS_FAILURE', err: any }
  | { type: 'USER_REQUESTING', userName: string }
  | { type: 'USER_SUCCESS', userName: string, data: Object }
  | { type: 'USER_FAILURE', userName: string, err: any };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => ReduxState;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

// Store
export type Store = ReduxStore<ReduxState, Action>;
