import React from 'react';
import { render } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/How Are you react/i);
  expect(linkElement).toBeInTheDocument();
});
