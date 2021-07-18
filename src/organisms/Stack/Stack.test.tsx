import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import Stack, { IStackProps } from '.'

expect.extend(matchers)

describe('Stack Component', () => {
  const renderComponent = (props: IStackProps, dataTestId: string) =>
    render(<Stack data-testid={dataTestId} {...props} />)

  it('matches snapshot and default render', () => {
    const dataTestId = 'stack'
    const props = {
      title: 'Test',
      addButtonText: 'Add another card',
      onAddButtonClick: jest.fn(),
      onTitleClick: jest.fn(),
      cards: [{ children: 'My card' }],
      saveNewCardText: 'Save card...',
      newCardPlaceholder: 'Enter a title for this card...',
      onSave: jest.fn(),
    }
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('stack')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should click title to edit', () => {
    const dataTestId = 'stack'
    const props = {
      title: 'Test',
      addButtonText: 'Add another card',
      onAddButtonClick: jest.fn(),
      onTitleClick: jest.fn(),
      cards: [{ children: 'My card' }],
    }
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('stack')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should click add card', () => {
    const dataTestId = 'stack'
    const props = {
      title: 'Test',
      addButtonText: 'Add another card',
      onAddButtonClick: jest.fn(),
      cards: [{ children: 'My card' }],
    }
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('stack')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })
})
