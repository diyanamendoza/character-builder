import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app including header and main', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();

  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();

  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
