import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profile from '@components/Profile';

test('should render', () => {
  const component = render(<Profile />);
  expect(component).toBeTruthy();
});
