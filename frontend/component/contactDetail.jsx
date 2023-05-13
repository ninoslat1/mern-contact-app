import { useContactContext } from "../hooks/useContactContext"

const ContactDetail = ({contact}) => {

  const {dispatch} = useContactContext()

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/api/contact/${contact._id}`, {
      method: 'DELETE',
      mode:  'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()
    
    if(response.ok){
      dispatch({type: 'DELETE_CONTACT', payload: json})
    }
  }

  return (
    <>
    <div className="mx-auto px-6 font-inter sm:py-5 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
      <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 flex items-start">
        <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl mb-2 text-slate-700">{contact.name}</div>
          <p className="text-sm text-slate-600"><strong>Number:</strong> {contact.number}</p>
          <p className="text-sm text-slate-600"><strong>Email:</strong> {contact.email || <strong><i>"REDACTED"</i></strong>}</p>
          <p className="text-sm text-slate-600"><strong>Address:</strong> {contact.address || <strong><i>"REDACTED"</i></strong>}</p>
        </div>
        <div className="px-6 py-5">
          <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactDetail