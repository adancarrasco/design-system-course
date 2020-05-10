import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from '.'

storiesOf('Atoms|Badge', module)
  .add('Default', () => <Badge />)
  .add('Background image', () => (
    <Badge backgroundImage="https://avatars2.githubusercontent.com/u/3975603?s=80&v=4" />
  ))
  .add('Initials', () => <Badge userName="Adán Carrasco" />)
