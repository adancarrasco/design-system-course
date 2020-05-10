import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button, { IButtonProps } from '.'

describe('Button Component', () => {
  const renderComponent = ({ children }: IButtonProps) => render(<Button>{children}</Button>)
  it('matches snapshot', () => {
    const props = {
      children: 'Hello',
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container).toMatchSnapshot()
  })

  it('should render', () => {
    const props = {
      children: 'Hello',
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container).toBeInTheDocument()
  })

  it('should render with startIcon', () => {
    const props = {
      children: 'Hello',
      icon: 'myIcon',
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container.previousSibling).toBe('myIcon')
  })
})
