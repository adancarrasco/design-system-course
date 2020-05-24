import * as React from 'react'
import styled from '@emotion/styled'
import ButtonInput from '../../molecules/ButtonInput'
import Badge, { IBadgeProps } from '../../atoms/Badge'

export interface IInputCommentProps extends IInputCommentStyledProps {
  isEditMode?: boolean
  isEditing?: boolean
  placeholder: string
  saveText: string
  onSaveClick: () => void
  onChange?: () => void
  onCancelClick?: () => void
  badgeOptions: IBadgeProps
}

const InputComment: React.FC<IInputCommentProps> = ({
  placeholder,
  saveText,
  onSaveClick,
  onChange,
  onCancelClick,
  badgeOptions,
}) => (
  <InputCommentStyled>
    <Badge {...badgeOptions} />
    <ButtonInput
      placeholder={placeholder}
      saveText={saveText}
      onSave={onSaveClick}
      onChange={onChange}
      onCancelClick={onCancelClick}
    />
  </InputCommentStyled>
)

interface IInputCommentStyledProps {
  borderColor?: string
}

const InputCommentStyled = styled.div<IInputCommentStyledProps>`
  display: flex;
  min-width: 340px;
  > span {
    margin-right: 0.5rem;
    align-self: flex-start;
  }
  > div {
    width: calc(100% - 3.7rem);
    align-self: flex-end;
  }
`

export default InputComment
