/* @flow */

import axios from 'axios';

import type { Dispatch, ThunkAction } from '../types';

const API_URL = 'https://api.github.com';

// Export this for unit testing more easily
export const fetchUser = (
  userName: string,
  URL: string = API_URL
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'USER_REQUESTING', userName });
  try {
    const res = await axios.get(`${URL}/users/${userName}`);
    console.log('res ac', res);
    dispatch({ type: 'USER_SUCCESS', userName, data: res.data });
  } catch (err) {
    dispatch({ type: 'USER_FAILURE', userName, err: err.message });
  }
};

export default fetchUser;
