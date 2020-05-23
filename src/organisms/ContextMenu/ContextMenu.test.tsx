import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

import ContextMenu, { IContextMenuProps } from '.'
import { MoreHoriz } from '@material-ui/icons'

expect.extend(matchers)

describe('ContextMenu Component', () => {
  const renderComponent = (props: IContextMenuProps, dataTestId?: string) =>
    render(<ContextMenu data-testid={dataTestId} {...props} />)

  let props
  beforeEach(() => {
    props = {
      title: 'Options',
      Icon: MoreHoriz,
      onOpenMenuClick: jest.fn(),
      ctxMenuWidth: '300px',
    }
  })

  it('matches snapshot and default render', () => {
    const dataTestId = 'context-menu'
    const { getByTestId } = renderComponent(props, dataTestId)
    const container = getByTestId('context-menu')
    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should open and dismiss', () => {
    window.Element.prototype.getClientRects = function getClientRects() {
      return ([
        {
          bottom: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0,
          width: 0,
          x: 0,
          y: 0,
          item: null,
        },
      ] as unknown) as DOMRectList
    }
    props.onClick = jest.fn()
    const { getByRole, getByText, getAllByRole } = renderComponent(props)
    const ctxMenuButton = getByRole(/button/)
    fireEvent.click(ctxMenuButton)
    const contextMenu = getByText('Options')
    expect(contextMenu).toBeInTheDocument()
    const [ctxMenuButton2, closeButton] = getAllByRole(/button/)
    fireEvent.click(closeButton)
    expect(ctxMenuButton2.parentElement.parentElement.nextSibling).toBeNull()
  })
})
