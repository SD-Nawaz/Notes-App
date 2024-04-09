// Write your code here
import {useState} from 'react'

import {v4 as uuid} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesContainer,
  Heading,
  FormContainer,
  NotesInput,
  TitleInput,
  Button,
  NotesList,
  EmptyPara,
  EmptyHeading,
  EmptyContainer,
  EmptyImage,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNotes(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()

    const newNotes = {
      id: uuid(),
      title,
      notes,
    }
    setNotesList(prevState => [...prevState, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <NotesContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onAddNotes}>
        <TitleInput
          value={title}
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <NotesInput
          value={notes}
          type="textarea"
          rows="20"
          cols="50"
          placeholder="Take a Note..."
          onChange={onChangeNotes}
        />
        <Button type="submit">Add</Button>
      </FormContainer>
      {notesList.length === 0 ?
        (<EmptyContainer>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyPara>Notes you add will appear here</EmptyPara>
        </EmptyContainer>)
        : 
        (<NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>)
      }
      
    </NotesContainer>
  )
}

export default Notes
