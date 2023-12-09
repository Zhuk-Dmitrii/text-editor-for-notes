import { useState } from 'react'
import { Tags } from '../Tags/Tags.tsx'
import { List } from '../List/List.tsx'

export function Layout(): JSX.Element {
   const [note, setNote] = useState([])
   const [text, setText] = useState('')

   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setText(event.target.value)
   }

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()

      const data = {
         id: Date.now(),
         text,
      }

      setNote([...note, data])
      setText('')
   }

   return (
      <div className="container d-flex flex-column min-vh-100 bg-danger">
         <form className="d-flex mt-5" onSubmit={handleSubmit}>
            <input
               className="form-control flex-grow-1 me-3"
               type="text" placeholder="Enter your note"
               onChange={handleChange}
               value={text}
            />
            <button type='submit' className="btn btn-primary" style={{ width: '150px' }}>Add note</button>
         </form>
         <div className="d-flex mt-5">
            <Tags />
            <List>
               {note.map((item) => {
                  return (
                     <li key={item.id} className="d-flex justify-content-between align-items-center">
                        <p className="me-3">{item.text}</p>
                        <button className="btn btn-danger">Delete</button>
                     </li>
                  )
               })}
            </List>
         </div>
      </div>
   )
}