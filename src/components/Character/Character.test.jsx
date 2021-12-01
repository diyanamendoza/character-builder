import { render } from '@testing-library/react';
import Character from './Character.jsx';

it('should render character component', () => {
  const { container } = render(
    <Character head="deadpool" torso="deadpool" feet="deadpool" />
  );
  expect(container).toMatchSnapshot();
});
