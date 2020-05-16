import * as React from 'react'
import styled from '@emotion/styled'

export interface ITokenProps extends ITokenStyledProps {
  children: React.ReactNode | string
}

const Token: React.FC<ITokenProps> = ({ children, ...rest }) => (
  <TokenStyled role="button" {...rest}>
    {children}
  </TokenStyled>
)

export interface ITokenStyledProps {
  borderRadius?: string
  borderColor?: string
  backgroundColor?: string
  color?: string
  isActive?: boolean
  activeBorderColor?: string
  activeBackgroundColor?: string
  activeColor?: string
}

const TokenStyled = styled.span<ITokenStyledProps>`
  cursor: pointer;
  background-color: ${({ isActive, backgroundColor, activeBackgroundColor }) =>
    isActive ? activeBackgroundColor ?? '#c6dff5' : backgroundColor ?? '#fff'};
  border: 1px solid;
  border-color: ${({ isActive, borderColor, activeBorderColor }) =>
    isActive ? activeBorderColor ?? '#5490ea' : borderColor ?? '#ababab'};
  border-radius: ${(props) => props.borderRadius ?? '4px'};
  color: ${({ isActive, color, activeColor }) =>
    isActive ? activeColor ?? '#2763bd' : color ?? '#000'};
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  padding: 0.2rem 0.3rem;
`

export default Token
