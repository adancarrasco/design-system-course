import * as React from 'react'
import styled from '@emotion/styled'
import Portal from '../../utils/Portal'
import Button from '../../atoms/Button'
import { CloseOutlined } from '@material-ui/icons'

export interface IModalProps extends IModalStyledProps {
  header?: React.ReactNode
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  shouldShow: boolean
  onCloseModal?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Modal: React.FC<IModalProps> = ({
  header,
  title,
  children,
  footer,
  shouldShow,
  onCloseModal,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(shouldShow)

  const onCloseModalHandler = (e) => {
    onCloseModal && onCloseModal(e)
    setIsOpen(false)
  }

  return isOpen ? (
    <Portal>
      <OverlayStyled onClick={onCloseModalHandler}>
        <ModalStyled {...rest}>
          <ButtonCloseStyled
            backgroundColorHover="transparent"
            backgroundColor="transparent"
            StartIcon={CloseOutlined}
            onClick={onCloseModalHandler}
          />
          {(header || title) && <HeaderStyled>{title}</HeaderStyled>}
          <BodyStyled>{children}</BodyStyled>
          {footer && <FooterStyled>{footer}</FooterStyled>}
        </ModalStyled>
      </OverlayStyled>
    </Portal>
  ) : null
}

interface IOverlayStyledProps {
  background?: string
  zIndex?: number
}

const OverlayStyled = styled.div<IOverlayStyledProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => props.background ?? 'rgba(0,0,0,0.6)'};
  top: 0;
  left: 0;
  z-index: ${(props) => props.zIndex ?? '20'};
`

export interface IModalStyledProps {
  backgroundColor?: string
  width?: string
}
const ModalStyled = styled.div<IModalStyledProps>`
  position: relative;
  border-radius: 2px;
  margin: 48px 0 80px;
  /* display:none; */
  padding: 1.5rem;
  background-color: ${(props) => props.backgroundColor ?? '#eaeaea'};
  width: ${(props) => props.width ?? '768px'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const ButtonCloseStyled = styled(Button)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  color: #ababab;
  &:hover {
    color: #7b7b7b;
  }
`

const HeaderStyled = styled.div``

const BodyStyled = styled.div``

const FooterStyled = styled.div`
  position: absolute;
  bottom: 1.5rem;
`

export default Modal
