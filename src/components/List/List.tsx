export function List({ children }: { children: JSX.Element }): JSX.Element {
   return (
      <div className="d-flex flex-column w-75 ms-3">
         <h3 className="mb-3 text-center">Notes</h3>
         <div className="bg-secondary">
            <ul>
               {children}
            </ul>
         </div>
      </div>
   )
}