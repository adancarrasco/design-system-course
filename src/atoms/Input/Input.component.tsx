import * as React from 'react'
import styled from '@emotion/styled'

export interface IInputProps extends IInputStyledProps {
  placeholder?: string
  value?: string
  onChange?: () => void
}

const Input: React.FC<IInputProps> = ({ placeholder, value, onChange }) => (
  <InputStyled placeholder={placeholder} value={value} onChange={onChange} />
)

interface IInputStyledProps {
  borderColor?: string
}

const InputStyled = styled.textarea<IInputStyledProps>`
  border: 1px solid;
  border-radius: 4px;
  border-color: ${(props) => props.borderColor ?? '#6868ff'};
  font-size: 0.9rem;
  padding: 0.5rem;
  resize: none;
  width: 100%;
  min-height: 20px;
`

export default Input
