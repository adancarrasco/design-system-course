import * as React from 'react'
import styled from '@emotion/styled'
import { AddOutlined } from '@material-ui/icons'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Button from '../../atoms/Button'
import Card, { ICardProps } from '../../molecules/Card'
import ButtonInput from '../ButtonInput'
import Modal, { IModalProps } from '../Modal'
import { reorder } from '../../utils/helpers'

export interface IStackProps extends IStackStyledProps {
  title: string
  addButtonText: string
  onAddButtonClick: () => void
  initialCards: ICardProps[]
  saveNewCardText: string
  newCardPlaceholder: string
  onTitleClick?: () => void
  onSave: () => void
}

const Stack: React.FC<IStackProps> = ({
  title,
  addButtonText,
  onAddButtonClick,
  onTitleClick,
  onSave,
  initialCards,
  saveNewCardText,
  newCardPlaceholder,
  ...rest
}) => {
  const initialModalState = { title: 'Sample', shouldShow: false, children: 'Some text here' }
  const [isAdding, setIsAdding] = React.useState<boolean>(false)
  const [cards, setCards] = React.useState<ICardProps[]>(initialCards)
  const [modalState, setModalState] = React.useState<IModalProps>(initialModalState)
  const onAddClickHandler = () => {
    setIsAdding(true)
    onAddButtonClick()
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const quotes: any = reorder(cards, result.source.index, result.destination.index)

    setCards(quotes)
  }

  const onCardClickHandler = (card: ICardProps) => {
    console.log(card)
    setModalState({
      title: 'Edit ' + card.children,
      children: JSON.stringify(card),
      shouldShow: true,
    })
  }
  const onCloseModalHandler = () => {
    setModalState(initialModalState)
  }

  return (
    <StackStyled role="button" {...rest}>
      <TitleContainerStyled
        onClick={() => {
          onTitleClick && onTitleClick()
        }}
      >
        <ButtonInputStyled onSave={onSave}>{title}</ButtonInputStyled>
        <div className="contextMenu" />
      </TitleContainerStyled>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list" onDragEnd={() => console.log('test')}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {cards.map((card, i) => (
                  <Draggable
                    draggableId={card.children.toString()}
                    index={i}
                    key={card.children.toString()}
                  >
                    {(provided) => (
                      <CardContainerStyled
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card {...card} onClick={() => onCardClickHandler(card)} />
                      </CardContainerStyled>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {isAdding && (
        <NewCardButtonInputStyled
          isEditMode
          onSave={(inputValue: string) => {
            console.log('This is executed twice')
            console.log('Add on add new card here')
            setCards([
              ...cards,
              {
                children: inputValue,
                // tagsProps,
                // position
              },
            ])

            setIsAdding(false)
          }}
          saveText={saveNewCardText}
          placeholder={newCardPlaceholder}
          onCancelClick={() => setIsAdding(false)}
        ></NewCardButtonInputStyled>
      )}
      {!isAdding && (
        <AddButtonStyled
          StartIcon={AddOutlined}
          onClick={onAddClickHandler}
          backgroundColor="transparent"
          color="#a0a0a0"
        >
          {addButtonText}
        </AddButtonStyled>
      )}
      <Modal
        title={modalState.title}
        shouldShow={modalState.shouldShow}
        onCloseModal={onCloseModalHandler}
      >
        {modalState.children}
      </Modal>
    </StackStyled>
  )
}

export interface IStackStyledProps {
  backgroundColor?: string
  width?: string
}
const StackStyled = styled.div<IStackStyledProps>`
  padding: 0.5rem;
  background-color: ${(props) => props.backgroundColor ?? '#eaeaea'};
  border-radius: 4px;
  width: ${(props) => props.width ?? '272px'};
`

const TitleContainerStyled = styled.div`
  cursor: pointer;
  margin-bottom: 0.2rem;
`

const CardContainerStyled = styled.div`
  margin-bottom: 0.6rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`

const ButtonInputStyled = styled(ButtonInput)`
  min-height: unset;
  background: initial;
  padding: 0.2rem;
  font-size: 0.9rem;
  font-weight: bold;
  & textarea {
    height: 2.2rem;
  }
`

const AddButtonStyled = styled(Button)`
  padding: 0.2rem 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  svg {
    font-size: 1rem;
  }
`

const NewCardButtonInputStyled = styled(ButtonInput)`
  margin-top: 1rem;
`

export default Stack
