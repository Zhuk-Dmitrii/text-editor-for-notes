interface FormProps {
   submit: (event: React.FormEvent<HTMLFormElement>) => void
   change: (event: React.ChangeEvent<HTMLInputElement>) => void
   value: string
}

export function Form({submit, change, value}: FormProps) {
   return (
      <form className="d-flex mt-5" onSubmit={(e) => submit(e) }>
         <input
            className="form-control flex-grow-1 me-3"
            type="text"
            placeholder="Enter your note"
            value={value}
            onChange={(e) => change(e)} />
         <button className="btn btn-primary" style={{ width: '150px' }}>Add note</button>
      </form>
   )
}