import React from 'react'
import { storiesOf } from '@storybook/react'

import Stack from '.'
import { ICardProps } from '../../molecules/Card'

storiesOf('Organisms|Stack', module)
  .add('Default', () => (
    <Stack
      addButtonText="Add another card"
      onAddButtonClick={() => console.log('Add another card')}
      title="Test"
      initialCards={[{ children: 'Test' }, { children: 'Test 2' }, { children: 'Test 3' }]}
      onSave={() => console.log('Saving...')}
      saveNewCardText="Add card"
      newCardPlaceholder="Enter a title for this card..."
    />
  ))
  .add('Cards with params', () => (
    <div style={{ width: '300px' }}>
      <Stack
        addButtonText="Add another card"
        onAddButtonClick={() => console.log('Add another card')}
        title="Test"
        initialCards={[
          {
            children: 'Some comments here...',
            commentsCount: 10,
            isWatching: true,
            tagsProps: [{ backgroundColor: 'orange' }, { backgroundColor: 'black' }],
            watchers: [{ userName: 'Barney Stinson' }],
          },
          {
            children: 'Test',
            commentsCount: 2,
            isWatching: true,
            tagsProps: [{ backgroundColor: 'red' }, { backgroundColor: 'blue' }],
            watchers: [{ userName: 'Adan Carrasco' }],
          },
        ]}
        onSave={() => console.log('Saving...')}
        saveNewCardText="Add card"
        newCardPlaceholder="Enter a title for this card..."
      ></Stack>
    </div>
  ))
