import React from 'react'
import { storiesOf } from '@storybook/react'

import Tag from '.'

storiesOf('Atoms|Tag', module)
  .add('Default', () => <Tag />)
  .add('Custom props', () => <Tag backgroundColor="#90ce89" />)
  .add('As expanded', () => <Tag isExpanded />)
