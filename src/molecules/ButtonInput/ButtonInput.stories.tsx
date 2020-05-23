import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonInput from '.'

storiesOf('Molecules|ButtonInput', module)
  .add('Default', () => (
    <div style={{ width: '400px' }}>
      <ButtonInput
        placeholder="Add a more detailed description..."
        onClick={() => console.log('Edit mode')}
        saveText="Save"
        onSave={() => console.log('Saving...')}
        onChange={() => console.log('Changing...')}
        onCancelClick={() => console.log('Cancel click')}
      ></ButtonInput>
    </div>
  ))
  .add('No buttons', () => (
    <div style={{ width: '400px' }}>
      <ButtonInput
        placeholder="Add a more detailed description..."
        onClick={() => console.log('Edit mode')}
        onSave={() => console.log('Saving...')}
        onBlur={() => console.log('Blurring')}
        onChange={() => console.log('Changing...')}
      ></ButtonInput>
    </div>
  ))
