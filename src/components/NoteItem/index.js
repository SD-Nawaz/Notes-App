// Write your code here
import {NoteItemContainer, Notes, Title} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, notes} = noteDetails

  return (
    <NoteItemContainer>
      <Title>{title}</Title>
      <Notes>{notes}</Notes>
    </NoteItemContainer>
  )
}

export default NoteItem
