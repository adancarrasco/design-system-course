import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Badge, { getInitials, IBadgeProps } from '.'

describe('Badge Component', () => {
  const renderComponent = ({ userName, backgroundImage }: IBadgeProps) =>
    render(<Badge userName={userName} backgroundImage={backgroundImage} />)

  it('matches snapshot', () => {
    const props = {
      userName: 'Adan Carrasco',
    }
    const { getByText } = renderComponent(props)
    const container = getByText(getInitials(props.userName))
    expect(container).toMatchSnapshot()
  })

  it('should render', () => {
    const props = {
      userName: 'Adan Carrasco',
    }
    const { getByText } = renderComponent(props)
    const container = getByText(getInitials(props.userName))
    expect(container).toBeInTheDocument()
  })

  it('should return initials', () => {
    const initials = getInitials('Adan Carrasco')
    expect(initials).toBe('AC')
  })
})
