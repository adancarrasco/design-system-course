import * as React from 'react'
import styled from '@emotion/styled'

export interface ITagProps extends ITagStyledProps {
  backgroundColor?: string
}

const Tag: React.FC<ITagProps> = ({ ...rest }) => <TagStyled {...rest} />

export interface ITagStyledProps {
  backgroundColor?: string
  backgroundColorHover?: string
  isExpanded?: boolean
}

const TagStyled = styled.span<ITagStyledProps>`
  background-color: ${(props) => props.backgroundColor ?? '#ababab'};
  cursor: pointer;
  display: inline-flex;
  width: 3rem;
  height: ${(props) => (props.isExpanded ? '2.5rem' : '0.4rem')};
  border-radius: 3px;
  :hover {
    background-color: ${(props) => props.backgroundColorHover ?? '#ebebeb'};
  }
`

export default Tag
