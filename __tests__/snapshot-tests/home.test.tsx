import { create } from 'react-test-renderer';
import { Home } from '../../pages';

beforeEach(() => {
  jest.mock('expo-sqlite');
  console.error = jest.fn();
  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 8, 22, 13));
});

it('renders correctly', () => {
  const tree = create(
    <Home route={undefined} navigation={undefined} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
