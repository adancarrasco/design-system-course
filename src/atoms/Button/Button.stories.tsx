import React from 'react'
import { storiesOf } from '@storybook/react'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'

import Button from '.'

storiesOf('Atoms|Button', module)
  .add('Default', () => <Button>This is a button</Button>)
  .add('With StartIcon', () => <Button StartIcon={AccessAlarm}>Access Alarm Icon</Button>)
  .add('With EndIcon', () => <Button EndIcon={ThreeDRotation}>ThreeDRotation</Button>)
  .add('With both icons', () => (
    <Button StartIcon={AccessAlarm} EndIcon={ThreeDRotation}>
      Both Icons
    </Button>
  ))
  .add('One icon', () => <Button StartIcon={AccessAlarm} />)
