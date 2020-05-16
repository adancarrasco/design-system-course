import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import Token, { ITokenProps } from '.'

expect.extend(matchers)

describe('Token Component', () => {
  const renderComponent = (props: ITokenProps) => render(<Token {...props}>{props.children}</Token>)

  it('matches snapshot and default render', () => {
    const props = {
      children: 'Token',
    }
    const { getByText } = renderComponent(props)
    const container = getByText(props.children)
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should render with custom props', () => {
    const props = {
      children: 'Token',
      color: 'red',
      backgroundColor: 'blue',
      borderColor: 'red',
    }
    const { getByText } = renderComponent(props)
    const container = getByText(props.children)
    expect(container).toHaveStyleRule('color', 'red')
    expect(container).toHaveStyleRule('background-color', 'blue')
    expect(container).toHaveStyleRule('border-color', 'red')
  })

  it('should render active state', () => {
    const props = {
      children: 'Token',
      isActive: true,
    }
    const { getByText } = renderComponent(props)
    const container = getByText(props.children)
    expect(container).toHaveStyleRule('border-color', '#5490ea')
    expect(container).toHaveStyleRule('background-color', '#c6dff5')
    expect(container).toHaveStyleRule('color', '#2763bd')
    expect(container).toHaveStyleRule('font-weight', 'bold')
  })
})
