import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from '.'

storiesOf('Molecules|Card', module)
  .add('Default', () => <Card>Test</Card>)
  .add('With status props', () => (
    <Card
      tagsProps={[{ backgroundColor: 'red' }, { backgroundColor: 'blue' }]}
      commentsCount={3}
      isWatching
      watchers={[{ userName: 'Adan Carrasco' }]}
    >
      Test
    </Card>
  ))
