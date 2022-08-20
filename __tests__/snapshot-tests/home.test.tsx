import { create } from 'react-test-renderer';
import { Home } from '../../pages';

it('renders correctly', () => {
  jest.mock('expo-sqlite');
  const tree = create(
    <Home route={undefined} navigation={undefined} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
  jest.restoreAllMocks();
});
