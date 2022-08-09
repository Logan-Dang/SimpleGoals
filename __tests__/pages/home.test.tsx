import { create } from 'react-test-renderer';
import Home from '../../pages/home';

it('renders correctly', () => {
  const tree = create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
