import * as React from 'react'
import styled from '@emotion/styled'

export type TypographyType = 'uppercase' | 'strong' | 'default'

export interface TypographyCSSProps {
  color?: string
  type?: TypographyType
}

export interface TypographyComponentProps extends TypographyCSSProps {
  children: React.ReactNode | string
}

const Typography: React.FC<TypographyComponentProps> = ({
  children,
  type = 'default',
  color = '#3d3d3d',
}) => {
  const TypographyComponent = typographyTypes[type]
  return <TypographyComponent color={color}>{children}</TypographyComponent>
}

const AllCaps = styled.span<TypographyCSSProps>`
  text-transform: uppercase;
  color: ${(props) => props.color};
`

const Strong = styled.span<TypographyCSSProps>`
  color: ${(props) => props.color};
  font-weight: bold;
`

const Default = styled.span<TypographyCSSProps>`
  color: ${(props) => props.color};
`
const typographyTypes = {
  uppercase: AllCaps,
  strong: Strong,
  default: Default,
}

export default Typography
