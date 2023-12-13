import React from 'react'

interface ListItemProps {
   id: number,
   text: string,
   deleteNote: (id: number) => void
}

export function ListItem({ id, text, deleteNote }: ListItemProps) {
   function renderText(text: string): JSX.Element {
      const arrWords = text.split(' ');

      const newArrWords = arrWords.map((item, index) => {
         if (item.includes('#') && item.indexOf('#') === 0) {
            const elementString = (
               <span key={index} className="text-primary">
                  {item + ' '}
               </span>
            )

            return elementString
         } else if (item.includes('#') && item.indexOf('#') > 0) {
            const elementString = (
               <React.Fragment key={index}>
                  {item.slice(0, item.indexOf('#'))}
                  <span className="text-primary">{item.slice(item.indexOf('#')) + ' '}</span>
               </React.Fragment>
            )

            return elementString
         }

         return item + ' '
      })

      return <>{newArrWords}</>
   }

   return (
      <li key={id} className="d-flex justify-content-between align-items-center">
         <p className="me-3">{renderText(text)}</p>
         <button className="btn btn-danger" onClick={() => deleteNote(id)}>Delete</button>
      </li>
   )
}