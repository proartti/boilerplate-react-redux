/* @flow */

// import type { Dispatch } from './types';
import { App, asyncHome, NotFound } from './containers';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncHome, // Add your route here
        loadData: () => [
          // Add other pre-fetched actions here
        ]
      },
      {
        component: NotFound
      }
    ]
  }
];
