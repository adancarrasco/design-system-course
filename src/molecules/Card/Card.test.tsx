import React from 'react'
import { render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import Card, { ICardProps } from '.'

expect.extend(matchers)

describe('Card Component', () => {
  const renderComponent = (props: ICardProps, dataTestId: string) =>
    render(
      <Card data-testid={dataTestId} {...props}>
        {props.children}
      </Card>,
    )

  it('matches snapshot and default render', () => {
    const dataTestId = 'card'
    const props = {
      children: 'Test',
      tagsProps: [{ backgroundColor: 'red' }],
      commentsCount: 2,
    }
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('card')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should render with custom props', () => {
    const dataTestId = 'card'
    const props = {
      children: 'Test',
      tagsProps: [{ backgroundColor: 'red' }],
      commentsCount: 2,
      watchers: [{ userName: 'Adan Carrasco' }],
    }
    const { getByTestId, getByText, debug } = renderComponent(props, dataTestId)
    const container = getByTestId('card')
    expect(container).toBeInTheDocument()
    const badgeContainer = getByText('AC')
    const commentsCountContainer = getByText('2')
    expect(badgeContainer).toBeInTheDocument()
    expect(commentsCountContainer).toBeInTheDocument()
  })
})
