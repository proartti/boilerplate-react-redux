import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../containers/App';

jest.dontMock('../../containers/App/');

xit('renders the app layout', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
