import * as React from 'react'
import styled from '@emotion/styled'

import { Typography } from '../../atoms'
import Badge, { IBadgeProps } from '../../atoms/Badge'

export interface IStatusUpdateProps extends IStatusUpdateStyledProps {
  title: string
  badgeOptions: IBadgeProps
  userName: string
  statusUpdate: string
  updatedOn: string
}

const StatusUpdate: React.FC<IStatusUpdateProps> = ({
  title,
  badgeOptions,
  userName,
  statusUpdate,
  updatedOn,
  ...rest
}) => {
  return (
    <StatusUpdateStyled {...rest}>
      <Badge {...badgeOptions} />
      <StatusContainerStyled>
        <div>
          <Typography type="strong">{userName}</Typography>
          <Typography>{statusUpdate}</Typography>
        </div>
        <Typography>{updatedOn}</Typography>
      </StatusContainerStyled>
    </StatusUpdateStyled>
  )
}
interface IStatusUpdateStyledProps {}
const StatusUpdateStyled = styled.div<IStatusUpdateStyledProps>`
  display: flex;
  > button {
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
  }
`
const StatusContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  > div > span {
    display: inline-block;
    margin: 0 0.3rem 0.3rem 0;
  }
`

export default StatusUpdate
