import { useState } from 'react'
import { Form } from '../Form/Form.tsx'
import { Tags } from '../Tags/Tags.tsx'
import { List } from '../List/List.tsx'
import { ListItem } from '../ListItem/ListItem.tsx'
import { TagItem } from '../TagItem/TagItem.tsx'
import { IListItem } from '../../types/interfaces.ts'
import { getTag } from '../../helpers/getTag.ts'

export function Layout() {
   const [note, setNote] = useState<IListItem[]>([])
   const [text, setText] = useState<string>('')

   function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
      setText(event.target.value)
   }

   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault()

      const tag: string = getTag(text)

      const data: IListItem = {
         id: Date.now(),
         text,
         tag
      }

      setNote([...note, data])
      setText('')
   }

   function handleDeleteItem(id: number): void {
      setNote(note.filter(item => item.id !== id))
   }

   return (
      <div className="container d-flex flex-column min-vh-100 bg-light">
         <Form submit={handleSubmit} change={handleChange} value={text} />
         <div className="d-flex mt-5">
            <Tags>
               {note.map((item) => {
                  if (item.tag) {
                     return <TagItem key={item.id} id={item.id} tag={item.tag} />
                  }
               })}
            </Tags>
            <List>
               {note.map(item => <ListItem key={item.id} id={item.id} text={item.text} deleteNote={handleDeleteItem} />)}
            </List>
         </div>
      </div>
   )
}