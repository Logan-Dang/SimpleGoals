import { create } from 'react-test-renderer';
import { NewGoal } from '../../pages';

it('renders correctly', () => {
  const tree = create(<NewGoal />).toJSON();
  expect(tree).toMatchSnapshot();
});
