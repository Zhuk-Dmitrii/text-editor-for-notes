interface ListItemProps {
   id: number,
   text: string,
   deleteNote: (id: number) => void
}

export function ListItem({ id, text, deleteNote}: ListItemProps) {
   return (
      <li key={id} className="d-flex justify-content-between align-items-center">
         <p className="me-3">{text}</p>
         <button className="btn btn-danger" onClick={() => deleteNote(id)}>Delete</button>
      </li>
   )
}