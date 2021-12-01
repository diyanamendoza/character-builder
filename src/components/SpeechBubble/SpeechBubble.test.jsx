import { render } from '@testing-library/react';
import SpeechBubble from './SpeechBubble.jsx';

it('should render speech bubble component', () => {
  const { container } = render(
    <SpeechBubble mottos={['hi', 'get outta here']} />
  );
  expect(container).toMatchSnapshot();
});
