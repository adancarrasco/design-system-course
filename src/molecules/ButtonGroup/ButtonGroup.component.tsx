import * as React from 'react'
import styled from '@emotion/styled'

import Button, { IButtonProps } from '../../atoms/Button'
import { Typography } from '../../atoms'

export interface IButtonGroupProps extends IButtonGroupStyledProps {
  title: string
  buttonsProps: IButtonProps[]
}

const ButtonGroup: React.FC<IButtonGroupProps> = ({ title, buttonsProps, ...rest }) => {
  return (
    <ButtonGroupStyled>
      <Typography as="h3">{title}</Typography>
      <ButtonsContainerStyled>
        {buttonsProps.map(({ children, ...buttonProps }) => (
          <Button {...buttonProps} key={children.toString()}>
            {children}
          </Button>
        ))}
      </ButtonsContainerStyled>
    </ButtonGroupStyled>
  )
}
interface IButtonGroupStyledProps {}
const ButtonGroupStyled = styled.div<IButtonGroupStyledProps>`
  > h3 {
    margin: 0 0 0.4rem 0;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: normal;
  }
`

const ButtonsContainerStyled = styled.div`
  > button {
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
  }
`
export default ButtonGroup
