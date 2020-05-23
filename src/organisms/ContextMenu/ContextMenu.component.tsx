import * as React from 'react'
import styled from '@emotion/styled'
import { CloseOutlined } from '@material-ui/icons'

import Button, { IButtonProps } from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import Portal from '../../utils/Portal'

export interface IContextMenuProps
  extends IContextMenuStyledProps,
    IMenuContainerStyledProps,
    IBodyContainerStyledProps {
  title: string
  Icon?: React.ReactType
  children: React.ReactNode
  onOpenMenuClick: () => void
  closeButtonColor?: string
  closeButtonColorHover?: string
  buttonToOpenMenu?: React.ReactNode
  buttonProps?: IButtonProps
}

const ContextMenu: React.FC<IContextMenuProps> = ({
  title,
  Icon,
  children,
  onOpenMenuClick,
  ctxMenuWidth,
  enableGutters,
  ctxMenuBackgroundColor,
  closeButtonColor = '#a8a8a8',
  closeButtonColorHover = '#555',
  buttonToOpenMenu,
  buttonProps,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [ctxMenuCoordinates, setCtxMenuCoordinates] = React.useState(null)
  const closeOverlay = () => {
    setIsOpen(false)
    setCtxMenuCoordinates(null)
  }
  const onOpenMenuClickHandler = (e: any) => {
    const targetProps = e.target.getClientRects()[0]
    const { x, y, height } = targetProps
    setCtxMenuCoordinates({ x, y: y + height })
    setIsOpen(true)
    onOpenMenuClick()
  }
  return (
    <ContextMenuStyled {...rest}>
      <OpenMenuButtonStyled {...buttonProps} onClick={onOpenMenuClickHandler} StartIcon={Icon}>
        {buttonToOpenMenu}
      </OpenMenuButtonStyled>
      {isOpen && (
        <Portal>
          <OverlayStyled onClick={closeOverlay} />
          <MenuContainerStyled
            ctxMenuWidth={ctxMenuWidth}
            ctxMenuBackgroundColor={ctxMenuBackgroundColor}
            style={{ left: ctxMenuCoordinates.x, top: ctxMenuCoordinates.y }}
          >
            {title && (
              <TitleContainerStyled>
                <Typography>{title}</Typography>
                <Button
                  backgroundColorHover="transparent"
                  backgroundColor="transparent"
                  color={closeButtonColor}
                  colorHover={closeButtonColorHover}
                  StartIcon={CloseOutlined}
                  onClick={closeOverlay}
                />
              </TitleContainerStyled>
            )}
            <BodyContainerStyled enableGutters={enableGutters}>
              <>{children}</>
            </BodyContainerStyled>
          </MenuContainerStyled>
        </Portal>
      )}
    </ContextMenuStyled>
  )
}

export interface IContextMenuStyledProps {
  backgroundColor?: string
}
const ContextMenuStyled = styled.div<IContextMenuStyledProps>`
  padding: 0.5rem;
  position: relative;
`

const OpenMenuButtonStyled = styled(Button)``

const OverlayStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

interface IMenuContainerStyledProps {
  ctxMenuWidth?: string
  ctxMenuBackgroundColor?: string
}
const MenuContainerStyled = styled.div<IMenuContainerStyledProps>`
  position: absolute;
  width: ${(props) => props.ctxMenuWidth};
  background-color: ${(props) => props.ctxMenuBackgroundColor ?? '#fff'};
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);
  border-radius: 4px;
`

const TitleContainerStyled = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0.2rem;
  > span {
    display: block;
    box-sizing: border-box;
    margin: 0 0.5rem;
    border-bottom: 1px solid rgba(9, 30, 66, 0.13);
    padding-bottom: 0.6rem;
    text-align: center;
  }
  > button {
    position: absolute;
    right: 0;
    top: 0;
  }
`

interface IBodyContainerStyledProps {
  enableGutters?: boolean
}

const BodyContainerStyled = styled.div<IBodyContainerStyledProps>`
  width: 100%;
  padding-bottom: 0.7rem;
  padding: ${(props) => (props.enableGutters ? '0 0.5rem 0.7rem' : '')};
`

export default ContextMenu
