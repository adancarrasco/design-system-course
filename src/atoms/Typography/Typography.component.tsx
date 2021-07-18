import * as React from 'react'
import styled from '@emotion/styled'

export type TypographyType = 'uppercase' | 'strong' | 'default'

export interface TypographyCSSProps {
  color?: string
  type?: TypographyType
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  fontSize?: string
}

export interface TypographyComponentProps extends TypographyCSSProps {
  children: React.ReactNode | string
}

const Typography: React.FC<TypographyComponentProps> = ({
  children,
  type = 'default',
  color = '#3d3d3d',
  as = 'span',
  fontSize,
}) => {
  const TypographyComponent = typographyTypes[type]
  return (
    <TypographyComponent as={as} color={color} fontSize={fontSize}>
      {children}
    </TypographyComponent>
  )
}

const AllCaps = styled.span<TypographyCSSProps>`
  text-transform: uppercase;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize ?? ''};
`

const Strong = styled.span<TypographyCSSProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize ?? ''};
  font-weight: bold;
`

const Default = styled.span<TypographyCSSProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize ?? ''};
`
const typographyTypes = {
  uppercase: AllCaps,
  strong: Strong,
  default: Default,
}

export default Typography
