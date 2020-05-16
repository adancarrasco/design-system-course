import React from 'react'
import { storiesOf } from '@storybook/react'
import { AccessAlarm } from '@material-ui/icons'

import Token from '.'

storiesOf('Atoms|Token', module)
  .add('Default', () => <Token>Token</Token>)
  .add('With custom props', () => (
    <Token borderColor="#aa0000" borderRadius="12px" backgroundColor="#fefefe" color="#aa0000">
      My token
    </Token>
  ))
  .add('With icon', () => (
    <Token>
      <AccessAlarm />
    </Token>
  ))
  .add('Active', () => <Token isActive>Token</Token>)
