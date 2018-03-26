import home from '../../reducers/home';

describe.skip('user data home', () => {
  test('should return the initial state', () => {
    expect(home(undefined, {})).toEqual({
      readyStatus: 'USER_INVALID',
      err: null,
      list: []
    });
  });

  test('should handle USER_REQUESTING', () => {
    expect(
      home(undefined, {
        type: 'USER_REQUESTING',
        err: null,
        data: []
      })
    ).toEqual({
      readyStatus: 'USER_REQUESTING',
      err: null,
      list: []
    });
  });

  test('should handle USER_FAILURE', () => {
    expect(
      home(undefined, {
        type: 'USER_FAILURE',
        err: 'Oops! Something went wrong.',
        data: []
      })
    ).toEqual({
      readyStatus: 'USER_FAILURE',
      err: 'Oops! Something went wrong.',
      list: []
    });
  });

  test('should handle USER_SUCCESS', () => {
    expect(
      home(undefined, {
        type: 'USER_SUCCESS',
        err: null,
        data: [{ id: '1', name: 'Welly' }]
      })
    ).toEqual({
      readyStatus: 'USER_SUCCESS',
      err: null,
      list: [{ id: '1', name: 'Welly' }]
    });
  });
});
