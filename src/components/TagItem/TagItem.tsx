interface TagItemProps {
   id: number
   tag: string
}

export function TagItem({id, tag}: TagItemProps) {
   return (
      <li key={id} className="d-flex align-items-center">
         <input type="checkbox" id={String(id)}/>
         <label htmlFor={String(id)} className="ms-3 text-primary">{tag}</label>
      </li>
   )
}