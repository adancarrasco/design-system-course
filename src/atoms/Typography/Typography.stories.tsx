import React from 'react'
import { storiesOf } from '@storybook/react'

import Typography from '.'

storiesOf('Atoms|Typography', module)
  .add('Default', () => <Typography>Test</Typography>)
  .add('Uppercase', () => <Typography type="uppercase">All caps here</Typography>)
  .add('Strong', () => <Typography type="strong">Strong text here</Typography>)
