import * as React from 'react'
import styled from '@emotion/styled'
import { AddOutlined } from '@material-ui/icons'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Button from '../../atoms/Button'
import { reorder } from '../../utils/helpers'
import Stack, { IStackProps } from '../Stack'
import ButtonInput from '../ButtonInput'

export interface IBoardProps extends IBoardStyledProps {
  title: string
  addButtonText: string
  onAddButtonClick: () => void
  initialStacks: IStackProps[]
  saveNewStackText: string
}

const Board: React.FC<IBoardProps> = ({
  title,
  addButtonText,
  onAddButtonClick,
  initialStacks,
  saveNewStackText,
  ...rest
}) => {
  const [isAdding, setIsAdding] = React.useState<boolean>(false)
  const [stacks, setStack] = React.useState<IStackProps[]>(initialStacks)
  function onDragEnd(result) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const quotes: any = reorder(stacks, result.source.index, result.destination.index)

    setStack(quotes)
  }

  return (
    <BoardStyled {...rest}>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="list"
            direction="horizontal"
            onDragEnd={() => console.log('test')}
          >
            {(provided) => (
              <StacksContainerStyled ref={provided.innerRef} {...provided.droppableProps}>
                {stacks.map((stackProps, i) => (
                  <Draggable draggableId={stackProps.title} index={i} key={stackProps.title}>
                    {(provided) => (
                      // Refactor this to receive the ref in the Stack itself
                      <StackContainerStyled
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Stack {...stackProps} />
                      </StackContainerStyled>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <ButtonInputStyled
                  onSave={() => console.log('Update board name')}
                  saveText={saveNewStackText}
                >
                  {title}
                </ButtonInputStyled>
              </StacksContainerStyled>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </BoardStyled>
  )
}

interface IBoardStyledProps {}
const BoardStyled = styled.div``

const StacksContainerStyled = styled.div`
  display: flex;
`

const StackContainerStyled = styled.div`
  margin-right: 1rem;
  box-sizing: border-box;
`

const ButtonInputStyled = styled(ButtonInput)`
  width: 278px;
  background-color: rgba(0, 0, 0, 0.3);
`

export default Board
