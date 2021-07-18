import React from 'react'
import styled from '@emotion/styled'

import tokens from '../../tokens'

export interface IBadgeProps extends BadgeStyledProps {
  userName?: string
  initials?: string
}

export const getInitials = (userName) => {
  if (!userName) return null
  const [firstName, lastName] = userName.split(' ')
  return firstName[0] + lastName[0]
}

const Badge: React.FC<IBadgeProps> = ({ userName, backgroundImage, ...rest }) => {
  const initials = getInitials(userName)
  const BadgeComponent =
    backgroundImage || !initials ? (
      <BadgeStyled backgroundImage={backgroundImage} {...rest} />
    ) : (
      <BadgeStyled {...rest}>{initials}</BadgeStyled>
    )
  return BadgeComponent
}

type BadgeSizeType = 'small' | 'medium' | 'xl'

interface BadgeStyledProps {
  backgroundImage?: string
  size?: BadgeSizeType
  backgroundColor?: string
}

const sizeModes = {
  small: '1.8rem',
  medium: '2.7rem',
  large: '4rem',
}

const fontSizes = {
  small: '0.75rem',
  medium: '1rem',
  large: '3rem',
}

const BadgeStyled = styled.span<BadgeStyledProps>`
  width: ${({ size }) => (size ? sizeModes[size] : sizeModes['medium'])};
  height: ${({ size }) => (size ? sizeModes[size] : sizeModes['medium'])};
  background-image: ${(props) =>
    props.backgroundImage ? 'url("' + props.backgroundImage + '")' : ''};
  background-color: ${(props) => props.backgroundColor ?? tokens.button.default.background};
  background-size: ${({ size }) => (size ? sizeModes[size] : sizeModes['medium'])};
  display: inline-flex;
  font-size: ${({ size }) => (size ? fontSizes[size] : fontSizes['medium'])};
  font-weight: bold;
  border-radius: 50%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export default Badge
