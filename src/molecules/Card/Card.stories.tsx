import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from '.'

storiesOf('Molecules|Card', module)
  .add('Default', () => (
    <div style={{ width: '380px' }}>
      <Card>Test</Card>
    </div>
  ))
  .add('With status props', () => (
    <div style={{ width: '380px' }}>
      <Card
        tagsProps={[{ backgroundColor: 'red' }, { backgroundColor: 'blue' }]}
        commentsCount={3}
        isWatching
        watchers={[{ userName: 'Adan Carrasco' }]}
        onClick={() => console.log('Card click!')}
      >
        Test
      </Card>
    </div>
  ))
