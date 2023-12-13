import { useAppDispatch } from '../../redux/store.ts'
import { filterByTags } from '../../redux/notesSlice.ts'

interface TagItemProps {
   id: number,
   tag: string,
}

export function TagItem({ id, tag }: TagItemProps) {
   const dispatch = useAppDispatch()
   function handleToggleInput(event: React.ChangeEvent<HTMLInputElement>) {
      console.log(event.target.value)
      if (event.target.checked) {
         dispatch(filterByTags(tag))
      } else {
         dispatch(filterByTags(''))
      }
   }

   return (
      <li key={id} className="d-flex align-items-center">
         <input type="checkbox" id={String(id)} value={tag} onChange={handleToggleInput}/>
         <label htmlFor={String(id)} className="ms-3 text-primary">{tag}</label>
      </li>
   )
}