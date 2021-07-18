import React from 'react'
import { storiesOf } from '@storybook/react'

import Typography from '.'

storiesOf('Atoms|Typography', module)
  .add('Default', () => <Typography>Default text sample</Typography>)
  .add('Uppercase', () => <Typography type="uppercase">All caps text sample</Typography>)
  .add('Strong', () => <Typography type="strong">Strong text sample</Typography>)
