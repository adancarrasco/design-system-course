import React from 'react'
import { storiesOf } from '@storybook/react'
import { MoreHoriz } from '@material-ui/icons'

import ContextMenu from '.'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'

storiesOf('Organisms|ContextMenu', module)
  .add('Default', () => (
    <div>
      <ContextMenu
        title="Options"
        Icon={MoreHoriz}
        onOpenMenuClick={() => console.log('Open menu')}
        ctxMenuWidth="300px"
      >
        <Button>Hello</Button>
      </ContextMenu>
    </div>
  ))
  .add('With badge', () => (
    <div>
      <ContextMenu
        title="Options"
        onOpenMenuClick={() => console.log('Open menu')}
        ctxMenuWidth="300px"
        buttonToOpenMenu={<Badge userName="Adan Carrasco" />}
        buttonProps={{
          backgroundColor: 'transparent',
          colorHover: 'initial',
          backgroundColorHover: 'transparent',
        }}
      >
        <Button>Hello</Button>
      </ContextMenu>
    </div>
  ))
