import React from 'react'
import { storiesOf } from '@storybook/react'

import InputComment from '.'

storiesOf('Organisms|InputComment', module).add('Default', () => (
  <div style={{ width: '400px' }}>
    <InputComment
      placeholder="Add a more detailed description..."
      saveText="Save"
      onSaveClick={() => console.log('Saving...')}
      onChange={() => console.log('Changing...')}
      onCancelClick={() => console.log('Cancel click')}
      badgeOptions={{ userName: 'Adan Carrasco' }}
    ></InputComment>
  </div>
))
