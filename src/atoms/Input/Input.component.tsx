import * as React from 'react'
import styled from '@emotion/styled'

export interface IInputProps extends IInputStyledProps {
  placeholder?: string
  value?: string
  onChange?: () => void
  onBlur?: () => void
}

const Input: React.FC<IInputProps> = ({ placeholder, value, onChange, onBlur }) => (
  <InputStyled
    autoFocus
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
)

interface IInputStyledProps {
  borderColor?: string
}

const InputStyled = styled.textarea<IInputStyledProps>`
  border: 1px solid;
  border-radius: 4px;
  border-color: ${(props) => props.borderColor ?? '#6868ff'};
  box-sizing: border-box;
  font-size: 0.9rem;
  padding: 0.5rem;
  resize: none;
  width: 100%;
  min-height: 20px;
`

export default Input
