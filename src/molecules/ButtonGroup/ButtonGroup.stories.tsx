import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonGroup from '.'

storiesOf('Molecules|ButtonGroup', module).add('Default', () => (
  <div style={{ width: '300px' }}>
    <ButtonGroup
      title="Buttons here"
      buttonsProps={[
        { children: 'Test' },
        { children: 'More tesing' },
        { children: 'Other testing' },
      ]}
    ></ButtonGroup>
  </div>
))
