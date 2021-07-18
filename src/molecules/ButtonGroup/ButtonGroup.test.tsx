import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import ButtonGroup, { IButtonGroupProps } from '.'

expect.extend(matchers)

describe('ButtonGroup Component', () => {
  const renderComponent = (props: IButtonGroupProps, dataTestId: string) =>
    render(<ButtonGroup data-testid={dataTestId} {...props} />)

  let props
  beforeEach(() => {
    props = {}
  })

  it('matches snapshot and default render', () => {
    const dataTestId = 'buttonGroup'
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('buttonGroup')
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
