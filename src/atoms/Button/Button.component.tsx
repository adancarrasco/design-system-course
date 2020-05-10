import React from 'react'
import styled from '@emotion/styled'

export interface IButtonProps {
  StartIcon?: React.ReactType
  children?: React.ReactNode | string
  EndIcon?: React.ReactType
}

const Button: React.FC<IButtonProps> = ({ StartIcon, children, EndIcon }) => {
  return (
    <ButtonStyled>
      {StartIcon && <StartIcon />}
      {children && children}
      {EndIcon && <EndIcon />}
    </ButtonStyled>
  )
}

interface ButtonStyledProps {
  color?: string
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  color: ${(props) => props.color};
`

export default Button
