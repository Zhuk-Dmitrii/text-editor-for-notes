interface TagItemProps {
   id: number
   tag: string
}

export function TagItem({id, tag}: TagItemProps) {
   return (
      <li key={id}>
         <input type="checkbox" id={String(id)} />
         <label htmlFor={String(id)}>{tag}</label>
         <button className="btn btn-danger">x</button>
      </li>
   )
}