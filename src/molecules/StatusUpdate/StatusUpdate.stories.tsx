import React from 'react'
import { storiesOf } from '@storybook/react'

import StatusUpdate from '.'

storiesOf('Molecules|StatusUpdate', module).add('Default', () => (
  <div style={{ width: '380px' }}>
    <StatusUpdate
      title="Buttons here"
      userName="Adán Carrasco"
      badgeOptions={{ userName: 'Adán Carrasco' }}
      statusUpdate="joined to this card"
      updatedOn="May 17 at 12:28 AM"
    ></StatusUpdate>
  </div>
))
