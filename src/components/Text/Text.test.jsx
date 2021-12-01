import { screen, render } from '@testing-library/react'
import Text from './Text.jsx'

it('should render text input component', () => {
  const { container } = render(<Text text="tasty dumplings" />)
  const mottoInput = screen.getByLabelText(/Motto/)
  const mottoButton = screen.getByRole('button')

  screen.debug()

  expect(mottoInput).toBeInTheDocument()
  expect(mottoButton).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
