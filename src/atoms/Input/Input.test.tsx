import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import Input, { IInputProps } from '.'

expect.extend(matchers)

describe('Input Component', () => {
  const renderComponent = (props: IInputProps, dataTestId: string) =>
    render(<Input data-testid={dataTestId} {...props} />)

  it('matches snapshot and default render', () => {
    const dataTestId = 'input'
    const props = {
      placeholder: 'Add more detailed description...',
      value: 'This is the input value',
      onChange: jest.fn(),
    }
    const { getByText } = renderComponent(props, dataTestId)
    const container = getByText('This is the input value')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })
})
