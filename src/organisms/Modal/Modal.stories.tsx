import React from 'react'
import { storiesOf } from '@storybook/react'

import Modal from '.'

storiesOf('Organisms|Modal', module).add('Default', () => (
  <Modal title="Some title here" shouldShow footer={<span>This is my footer</span>}>
    <p>Test</p>
  </Modal>
))
