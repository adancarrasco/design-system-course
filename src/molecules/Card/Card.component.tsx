import * as React from 'react'
import styled from '@emotion/styled'
import { ChatBubbleOutlineOutlined, EditOutlined, VisibilityOutlined } from '@material-ui/icons'

import Tag, { ITagProps } from '../../atoms/Tag'
import Badge, { IBadgeProps } from '../../atoms/Badge'
import { Typography } from '../../atoms'
// TODO:
// Think of adding DueDate

export interface ICardProps extends ICardStyledProps {
  children: React.ReactNode | string
  tagsProps?: ITagProps[]
  isWatching?: boolean
  commentsCount?: number
  watchers?: IBadgeProps[]
}

const Card: React.FC<ICardProps> = ({
  children,
  tagsProps,
  isWatching,
  commentsCount,
  watchers,
  ...rest
}) => (
  <CardStyled role="button" {...rest}>
    <EditOutlinedStyled fontSize="small" />
    <TagsContainerStyled>
      {tagsProps && tagsProps.map((tagProps, i) => <TagStyled key={i} {...tagProps} />)}
    </TagsContainerStyled>
    {children}
    <StatusContainerStyled>
      <div>
        {isWatching && <VisibilityOutlined fontSize="small" />}
        {commentsCount && (
          <>
            <ChatBubbleOutlineOutlined fontSize="small" />
            <Typography>{commentsCount}</Typography>
          </>
        )}
      </div>
      <div>
        {watchers &&
          watchers.map(({ userName }) => <Badge size="small" key={userName} userName={userName} />)}
      </div>
    </StatusContainerStyled>
  </CardStyled>
)

const EditOutlinedStyled = styled(EditOutlined)`
  &.MuiSvgIcon-root {
    display: none;
    position: absolute;
    right: 5px;
    top: 5px;
  }
`

export interface ICardStyledProps extends IStatusContainerStyledProps {
  backgroundColor?: string
  backgroundColorHover?: string
  boxShadow?: string
}
const CardStyled = styled.div<ICardStyledProps>`
  background-color: ${(props) => props.backgroundColor ?? '#fff'};
  box-shadow: ${(props) => props.boxShadow ?? '0 1px 0 rgba(9,30,66,.25)'};
  box-sizing: border-box;
  color: ${(props) => props.color};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  position: relative;
  width: 100%;
  :hover {
    .MuiSvgIcon-root:first-of-type {
      display: inline-flex;
    }
    background-color: ${(props) => props.backgroundColorHover ?? '#f4f5f6'};
  }
`

export interface ITagsContainerStyledProps {}
const TagsContainerStyled = styled.div<ITagsContainerStyledProps>`
  display: flex;
  margin-bottom: 0.3rem;
`

export interface IStatusContainerStyledProps {
  color?: string
}
const StatusContainerStyled = styled.div<IStatusContainerStyledProps>`
  color: ${(props) => props.color};
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
  & > div:first-of-type {
    color: #ababab;
    & > svg {
      margin-right: 0.5rem;
      vertical-align: middle;
    }
  }
`
const TagStyled = styled(Tag)`
  margin-right: 0.4rem;
`

export default Card
