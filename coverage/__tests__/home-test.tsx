import React from 'react';
import { HostComponent } from 'react-native';
import renderer from 'react-test-renderer';
import { Home } from '../../pages';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
