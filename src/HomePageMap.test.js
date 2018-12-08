import React from 'react';
import ReactDOM from 'react-dom';
import HomePageMap from './HomePageMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePageMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
