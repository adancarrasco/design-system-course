import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Typography, { TypographyType } from '.'

describe('Typography Component', () => {
  const renderComponent = (type?: TypographyType) =>
    render(<Typography type={type}>Hello</Typography>)

  it('matches snapshot', () => {
    const { getByText } = renderComponent()
    const container = getByText('Hello')
    expect(container).toMatchSnapshot()
  })

  it('should render', () => {
    const { getByText } = renderComponent()
    const container = getByText('Hello')
    expect(container).toBeInTheDocument()
  })

  it('should render as all caps', () => {
    const { getByText } = renderComponent('strong')
    const container = getByText('Hello')
    expect(container).toHaveStyleRule('font-weight', 'bold')
  })

  it('should render as uppercase', () => {
    const { getByText } = renderComponent('uppercase')
    const container = getByText('Hello')
    expect(container).toHaveStyleRule('text-transform', 'uppercase')
  })
})
