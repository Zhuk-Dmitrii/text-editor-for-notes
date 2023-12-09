export function Form(): JSX.Element {
   return (
      <form className="d-flex mt-5">
         <input className="form-control flex-grow-1 me-3" type="text" placeholder="Enter your note" />
         <button className="btn btn-primary" style={{width: '150px'}}>Add note</button>
      </form>
   )
}