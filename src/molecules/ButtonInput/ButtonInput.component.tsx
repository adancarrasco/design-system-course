import * as React from 'react'
import styled from '@emotion/styled'
import { CloseOutlined } from '@material-ui/icons'

import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import { Typography } from '../../atoms'

const cancelId = 'cancel'
const saveId = 'save'

export interface IButtonInputProps {
  children?: string
  isEditMode?: boolean
  isEditing?: boolean
  placeholder?: string
  onClick?: (e: React.MouseEvent) => void
  saveText?: string
  onSave: (inputValue: string) => void
  onBlur?: () => void
  onChange?: () => void
  onCancelClick?: (e: React.MouseEvent) => void
}

const ButtonInput: React.FC<IButtonInputProps> = ({
  children = '',
  isEditMode = false,
  placeholder,
  onClick,
  saveText,
  onSave,
  onBlur,
  onChange,
  onCancelClick,
  ...rest
}) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(isEditMode)
  const [inputValue, setInputValue] = React.useState<string>(children)
  const [prevValue, setPrevValue] = React.useState<string>('')

  const save = () => {
    onSave(inputValue)
    setIsEditing(false)
  }

  const onClickHandler = (e: React.MouseEvent) => {
    if (!isEditing) {
      setPrevValue(inputValue)
      setIsEditing(true)
      onClick && onClick(e)
    }
  }

  const onActionsClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement
    if (
      isEditing &&
      (element.tagName.toLowerCase() === 'span' ||
        element.tagName.toLowerCase() === 'div' ||
        element.getAttribute('data-testid') === saveId)
    ) {
      save()
    } else {
      setInputValue(prevValue)
      setIsEditing(false)
    }
  }

  const onBlurHandler = () => {
    if (!saveText && isEditing) {
      onBlur && onBlur()
      save()
    }
  }

  const onCancelClickHanlder = (e) => {
    onCancelClick && onCancelClick(e)
  }

  return (
    <ButtonInputStyled
      onClick={(e) => {
        onClickHandler(e)
      }}
    >
      {isEditing ? (
        <EditInputStyled {...rest}>
          <Input
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setInputValue(e.target.value)
              onChange && onChange()
            }}
            onBlur={onBlurHandler}
            placeholder={placeholder}
          />
          {saveText && (
            <ActionsContainerStyled onClick={onActionsClick}>
              <Button
                data-testid={saveId}
                backgroundColor="#3ea93e"
                backgroundColorHover="#56bd56"
                colorHover="#fff"
                onClick={save}
              >
                {saveText}
              </Button>
              <Button
                data-testid={cancelId}
                backgroundColor="transparent"
                backgroundColorHover="transparent"
                color="#ababab"
                StartIcon={CloseOutlined}
                onClick={onCancelClickHanlder}
              />
            </ActionsContainerStyled>
          )}
        </EditInputStyled>
      ) : (
        <PlaceholderStyled {...rest}>
          <Typography>{inputValue.length > 0 ? inputValue : placeholder}</Typography>
        </PlaceholderStyled>
      )}
    </ButtonInputStyled>
  )
}
const ButtonInputStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
`

interface IPlaceholderStyledProps {
  backgroundColor?: string
  backgroundColorHover?: string
  isEditing?: boolean
}

const PlaceholderStyled = styled.div<IPlaceholderStyledProps>`
  cursor: pointer;
  background-color: ${({ backgroundColor, isEditing }) =>
    backgroundColor && isEditing ? backgroundColor : '#f1f1f1'};
  padding: 0.5rem 0.6rem;
  min-height: 40px;
  :hover {
    background-color: ${(props) => props.backgroundColorHover ?? '#e4e4e4'};
  }
`

const EditInputStyled = styled.div``

const ActionsContainerStyled = styled.div``

export default ButtonInput
