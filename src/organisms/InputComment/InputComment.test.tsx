import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import InputComment, { IInputCommentProps } from '.'

expect.extend(matchers)

describe('InputComment Component', () => {
  const renderComponent = (props: IInputCommentProps) => render(<InputComment {...props} />)
  let props
  beforeEach(() => {
    props = {
      placeholder: 'Add more detailed description...',
      onSaveClick: jest.fn(),
      badgeOptions: {
        userName: 'Adan Carrasco',
      },
    }
  })
  it('matches snapshot and default render', () => {
    const { getByText } = renderComponent(props)
    const comment = getByText('Add more detailed description...')
    const badge = getByText('AC')
    expect(comment.parentElement.parentElement.parentElement).toMatchSnapshot()
    expect(comment).toBeInTheDocument()
    expect(badge).toBeInTheDocument()
  })
})
