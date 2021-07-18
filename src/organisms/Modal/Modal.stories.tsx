import React from 'react'
import { storiesOf } from '@storybook/react'

import Modal from '.'
import Button from '../../atoms/Button'

storiesOf('Organisms|Modal', module).add('Default', () => {
  const ModalTest = () => {
    const [showModal, setShowModal] = React.useState(false)
    return (
      <>
        <Button onClick={() => setShowModal(true)}>Test</Button>
        <Modal
          title="Some title here"
          shouldShow={showModal}
          footer={<span>This is my footer</span>}
        >
          <p>Test</p>
        </Modal>
      </>
    )
  }
  return <ModalTest />
})
