import React from 'react'
import { storiesOf } from '@storybook/react'

import Board from '.'

storiesOf('Organisms|Board', module).add('Default', () => {
  const saveNewCardText = 'Add card'
  const newCardPlaceholder = 'Enter stack title...'
  const addButtonText = 'Add another card'
  const saveNewStackText = 'Add stack'
  const onAddButtonClick = () => console.log('Add button click')
  const onSave = () => console.log('Save something')
  return (
    <div>
      <Board
        title="Add new stack"
        saveNewStackText={saveNewStackText}
        initialStacks={[
          {
            addButtonText,
            title: 'Test stack 1',
            initialCards: [{ children: 'Test' }, { children: 'Test 2' }, { children: 'Test 3' }],
            saveNewCardText,
            newCardPlaceholder,
            onAddButtonClick,
            onSave,
          },
          {
            addButtonText,
            title: 'Test stack 2',
            initialCards: [
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
            ],
            saveNewCardText,
            newCardPlaceholder,
            onAddButtonClick,
            onSave,
          },
        ]}
        addButtonText="Add another list"
        onAddButtonClick={() => console.log('Add new list')}
      ></Board>
    </div>
  )
})
