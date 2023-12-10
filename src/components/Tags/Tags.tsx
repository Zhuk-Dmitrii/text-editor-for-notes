interface TagsProps {
   children: React.ReactNode
}

export function Tags({ children }: TagsProps) {
   return (
      <div className="d-flex flex-column w-25">
         <h3 className="mb-3 text-center">Tags</h3>
         <ul className="border-end border-secondary-subtle border-end-1">
            {children}
         </ul>
      </div>
   )
}