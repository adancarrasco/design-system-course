import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import Tag, { ITagProps } from '.'

expect.extend(matchers)

describe('Tag Component', () => {
  const renderComponent = (props: ITagProps, dataTestId: string) =>
    render(<Tag data-testid={dataTestId} {...props} />)

  it('matches snapshot and default render', () => {
    const dataTestId = 'tag'
    const props = {}
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('tag')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should render as expanded', () => {
    const dataTestId = 'tag'
    const props = {
      isExpanded: true,
    }
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('tag')
    expect(container).toHaveStyleRule('height', '2.5rem')
  })

  it('should render with custom props', () => {
    const dataTestId = 'tag'
    const props = {
      backgroundColor: 'green',
    }
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('tag')
    expect(container).toHaveStyleRule('background-color', 'green')
  })
})
