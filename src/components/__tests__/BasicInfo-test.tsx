import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BasicInfo, { BasicInfoProps } from '@components/BasicInfo';

let props: BasicInfoProps;

beforeEach(() => {
  props = {
    fullName: 'mockName',
    profession: 'mockProfession',
    location: 'mockLocation',
    image: '/mockPath',
    isInfoFixed: false,
  };
});

test('should render', () => {
  const component = render(<BasicInfo {...props} />);
  expect(component).toBeTruthy();
});
