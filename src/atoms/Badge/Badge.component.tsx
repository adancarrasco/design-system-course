import React from 'react'
import styled from '@emotion/styled'

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

interface BadgeStyledProps {
  backgroundImage?: string
  size?: string
  backgroundColor?: string
}

const defaultSize = '60px'

const BadgeStyled = styled.span<BadgeStyledProps>`
  width: ${(props) => props.size ?? defaultSize};
  height: ${(props) => props.size ?? defaultSize};
  background-image: ${(props) => 'url("' + props.backgroundImage + '")' ?? ''};
  background-color: ${(props) => props.backgroundColor ?? '#ababab;'};
  background-size: ${(props) => props.size ?? defaultSize};
  display: inline-flex;
  border-radius: 50%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export default Badge
