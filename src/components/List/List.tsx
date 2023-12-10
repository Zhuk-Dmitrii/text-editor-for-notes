interface ListProps {
   children: React.ReactNode
}

export function List({ children }: ListProps) {
   return (
      <div className="d-flex flex-column w-75 ms-3">
         <h3 className="mb-3 text-center">Notes</h3>
         <ul>
            {children}
         </ul>
      </div>
   )
}