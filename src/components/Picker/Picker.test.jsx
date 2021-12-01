import { screen, render } from '@testing-library/react';
import Picker from './Picker.jsx';

it('should render picker component', () => {
  const { container } = render(<Picker />);
  const selectHead = screen.getByLabelText(/Head/);
  screen.debug();
  expect(selectHead).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
