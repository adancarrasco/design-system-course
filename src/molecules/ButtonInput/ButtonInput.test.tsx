import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import ButtonInput, { IButtonInputProps } from '.'

expect.extend(matchers)

describe('ButtonInput Component', () => {
  const renderComponent = (props: IButtonInputProps, dataTestId: string) =>
    render(<ButtonInput data-testid={dataTestId} {...props} />)

  let props: IButtonInputProps
  beforeEach(() => {
    props = {
      placeholder: 'Add more detailed description...',
      onClick: jest.fn(),
      saveText: 'Add another card',
      onChange: jest.fn(),
      onSave: jest.fn(),
    }
  })
  it('matches snapshot and default render', () => {
    const dataTestId = 'buttonInput'
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('buttonInput')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should enable editing', () => {
    const dataTestId = 'buttonInput'
    const { getByTestId, getByPlaceholderText, getByText } = renderComponent(props, dataTestId)
    const container = getByTestId('buttonInput')
    expect(container.childNodes.length).toBe(1)
    fireEvent.click(container)
    const textArea = getByPlaceholderText('Add more detailed description...')
    expect(textArea).toBeInTheDocument()
    const saveButton = getByText('Add another card')
    fireEvent.click(saveButton)
  })

  it('should save text in state', async () => {
    const dataTestId = 'buttonInput'
    const { getByTestId, getByPlaceholderText, getByText } = renderComponent(props, dataTestId)
    const container = getByTestId('buttonInput')
    expect(container.childNodes.length).toBe(1)
    fireEvent.click(container)
    const textArea = getByPlaceholderText('Add more detailed description...')
    expect(textArea).toBeInTheDocument()
    await userEvent.type(textArea, 'Add some text here')
    const saveButton = getByText('Add another card')
    fireEvent.click(saveButton)
    const updatedText = getByText('Add some text here')
    expect(updatedText).toBeInTheDocument()
  })

  it('should click cancel and keep previous state', async () => {
    const dataTestId = 'buttonInput'
    const { getByTestId, getByPlaceholderText, getByText } = renderComponent(props, dataTestId)
    const container = getByTestId('buttonInput')
    expect(container.childNodes.length).toBe(1)
    fireEvent.click(container)
    const textArea = getByPlaceholderText('Add more detailed description...')
    expect(textArea).toBeInTheDocument()
    await userEvent.type(textArea, 'Add some text here')
    const cancelButton = getByTestId('cancel')
    fireEvent.click(cancelButton)
    const keptText = getByText('Add more detailed description...')
    expect(keptText).toBeInTheDocument()
  })
})
