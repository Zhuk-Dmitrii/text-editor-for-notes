import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store.ts'
import { addNote, deleteNote } from '../../redux/notesSlice.ts'
import { Form } from '../Form/Form.tsx'
import { Tags } from '../Tags/Tags.tsx'
import { List } from '../List/List.tsx'
import { ListItem } from '../ListItem/ListItem.tsx'
import { TagItem } from '../TagItem/TagItem.tsx'
import { IListItem } from '../../types/interfaces.ts'

export function Layout() {
   const [text, setText] = useState<string>('')
   const { data } = useSelector((state: RootState) => state.notes)
   const dispatch = useAppDispatch()

   function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
      setText(event.target.value)
   }

   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault()

      dispatch(addNote(text))
      setText('')
   }

   function handleDeleteItem(id: number): void {
      dispatch(deleteNote(id))
   }

   function renderTagItem(data: IListItem[]) {
      const set: string[] = [...new Set(data.map(item => item.tag).flat())]

      return (
         set.map((item, index) => {
            return <TagItem key={index} id={index} tag={item} />
         })
      )
   }

   return (
      <div className="container d-flex flex-column min-vh-100 bg-light">
         <Form submit={handleSubmit} change={handleChange} value={text} />
         <div className="d-flex mt-5">
            <Tags>
               {renderTagItem(data)}
            </Tags>
            <List>
               {data && data.map(item => <ListItem key={item.id} id={item.id} text={item.text} deleteNote={handleDeleteItem} />)}
            </List>
         </div>
      </div>
   )
}