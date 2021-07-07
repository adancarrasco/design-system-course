import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AccessAlarm } from '@material-ui/icons'

import Button, { IButtonProps } from '.'

describe('Button Component', () => {
  const renderComponent = ({ StartIcon, children, EndIcon }: IButtonProps) =>
    render(
      <Button StartIcon={StartIcon} EndIcon={EndIcon}>
        {children}
      </Button>,
    )
  it('matches snapshot', () => {
    const props = {
      children: 'Hello',
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container).toMatchSnapshot()
  })

  it('matches snapshot with StartIcon', () => {
    const props = {
      children: 'Hello',
      StartIcon: AccessAlarm,
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container).toMatchSnapshot()
  })

  it('should render', () => {
    const props = {
      children: 'Hello',
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container).toBeInTheDocument()
  })

  it('should render with StartIcon', () => {
    const props = {
      children: 'Hello',
      StartIcon: AccessAlarm,
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container.previousSibling).toContainHTML('svg')
  })

  it('should render with EndIcon', () => {
    const props = {
      children: 'Hello',
      EndIcon: AccessAlarm,
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container.nextSibling).toContainHTML('svg')
  })

  it('should render with both Icons', () => {
    const props = {
      children: 'Hello',
      StartIcon: AccessAlarm,
      EndIcon: AccessAlarm,
    }
    const { getByText } = renderComponent(props)
    const container = getByText('Hello')
    expect(container.previousSibling).toContainHTML('svg')
    expect(container.nextSibling).toContainHTML('svg')
  })

  it('should render as Icon', () => {
    const props = {
      StartIcon: AccessAlarm,
    }
    const { getByRole } = renderComponent(props)
    const container = getByRole(/button/)
    expect(container).toContainHTML('svg')
  })
})
