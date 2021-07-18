import * as React from 'react'
import styled from '@emotion/styled'
import ButtonInput from '../ButtonInput'
import Badge, { IBadgeProps } from '../../atoms/Badge'
import { Typography } from '../../atoms'

export interface IInputCommentProps extends IInputCommentStyledProps {
  isEditMode?: boolean
  isEditing?: boolean
  placeholder: string
  saveText: string
  onSaveClick: () => void
  onChange?: () => void
  onCancelClick?: () => void
  badgeOptions: IBadgeProps
  userName: string
  updatedOn: string
}

const InputComment: React.FC<IInputCommentProps> = ({
  placeholder,
  saveText,
  onSaveClick,
  onChange,
  onCancelClick,
  badgeOptions,
  userName,
  updatedOn,
  ...rest
}) => {
  const [isEditing, setIsEditing] = React.useState(false)
  const onClick = () => {
    setIsEditing(true)
  }
  const onSaveClickHandler = () => {
    setIsEditing(false)
    onSaveClick && onSaveClick()
  }

  const onCancelClickHandler = () => {
    setIsEditing(false)
    onCancelClick && onCancelClick()
  }

  return (
    <InputCommentStyled {...rest}>
      <Badge {...badgeOptions} />
      <InputContainerStyled isEditing={isEditing}>
        <Typography type="strong">{userName}</Typography>
        <Typography fontSize="0.8rem">{updatedOn}</Typography>
        <ButtonInputStyled
          placeholder={placeholder}
          saveText={saveText}
          onClick={onClick}
          onSave={onSaveClickHandler}
          onChange={onChange}
          onCancelClick={onCancelClickHandler}
        />
      </InputContainerStyled>
    </InputCommentStyled>
  )
}

interface IInputCommentStyledProps {
  borderColor?: string
}

const InputCommentStyled = styled.div<IInputCommentStyledProps>`
  display: flex;
  min-width: 340px;
  & > span {
    margin-right: 0.5rem;
    align-self: flex-start;
  }
`

interface IInputContainerStyledProps {
  isEditing: boolean
}

const InputContainerStyled = styled.div<IInputContainerStyledProps>`
  width: calc(100% - 3.7rem);
  align-self: flex-end;
  & > span:first-of-type {
    margin-right: 0.5rem;
  }
  & div > div {
    background-color: #fff;
    border: ${(props) => (props.isEditing ? '' : '1px solid #ababab')};
    border-radius: 2px;
    :hover {
      background-color: ${(props) => (props.isEditing ? '' : '#f5f5f5')};
    }
  }
`

const ButtonInputStyled = styled(ButtonInput)`
  margin-top: 0.5rem;
`

export default InputComment
