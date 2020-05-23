import React from 'react'
import styled from '@emotion/styled'

export interface IButtonProps extends IButtonStyledProps {
  StartIcon?: React.ReactType
  children?: React.ReactNode | string
  EndIcon?: React.ReactType
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const resolveChildren = (children) =>
  typeof children === 'function' ? children : <span>{children}</span>

const Button: React.FC<IButtonProps> = ({
  StartIcon,
  children,
  EndIcon,
  onClick = () => {},
  ...rest
}) => {
  return (
    <ButtonStyled onClick={onClick} {...rest}>
      {StartIcon && <StartIcon />}
      {children && resolveChildren(children)}
      {EndIcon && <EndIcon />}
    </ButtonStyled>
  )
}

interface IButtonStyledProps {
  color?: string
  colorHover?: string
  backgroundColor?: string
  backgroundColorHover?: string
  fontSize?: string
  padding?: string
}

const ButtonStyled = styled.button<IButtonStyledProps>`
  color: ${(props) => props.color ?? '#fff'};
  background-color: ${(props) => props.backgroundColor ?? 'rgba(130, 130, 130, 0.5)'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  padding: ${(props) => props.padding ?? '0.5rem'};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover {
    color: ${(props) => props.colorHover ?? '#ababab'};
    background-color: ${(props) => props.backgroundColorHover ?? 'rgba(145, 145, 145, 0.5)'};
  }
  & svg:first-of-type {
    margin-right: 4px;
  }
  & svg:last-child {
    margin-left: 4px;
  }
  & svg:only-child {
    margin: 0;
  }
  & > svg,
  & > span {
    vertical-align: middle;
  }
`

export default Button
