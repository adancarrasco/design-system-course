import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from '.'

storiesOf('Atoms|Input', module)
  .add('Default', () => (
    <div style={{ width: '500px' }}>
      <Input placeholder="Add more detailed description..." />
    </div>
  ))
  .add('With value', () => (
    <div style={{ width: '500px' }}>
      <Input value="This is a super important description" />
    </div>
  ))
