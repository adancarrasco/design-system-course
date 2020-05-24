import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import Modal, { IModalProps } from '.'

expect.extend(matchers)

describe('Modal Component', () => {
  const renderComponent = (props: IModalProps, dataTestId: string) =>
    render(<Modal data-testid={dataTestId} {...props} />)

  let props
  beforeEach(() => {
    props = {
      title: 'Some title here',
      shouldShow: true,
      footer: <span>This is my footer</span>,
      children: <p>Test body</p>,
    }
  })

  it('matches snapshot and default render', () => {
    const dataTestId = 'modal'
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('modal')
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('closes the snapshot', () => {
    const dataTestId = 'modal'
    const { getByRole, getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('modal')
    const closeButton = getByRole(/button/)
    fireEvent.click(closeButton)
    expect(container).not.toBeInTheDocument()
  })
})
