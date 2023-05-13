import { useEffect, useState } from 'react'
import {useContactContext} from "../hooks/useContactContext"
import ContactDetail from '../component/contactDetail'

const Home = () => {
    const {contact, dispatch} = useContactContext()

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState(null)
    const [emptyField, setEmptyField] = useState([])

    const handleSubmit = async (e) => {
      e.preventDefault()

      const contact = {name, number, email, address}
      
      const response = await fetch('http://localhost:4000/api/contact/', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()

      if (!response.ok) {
        setError(json.error)
        setEmptyField(json.emptyField)
      }
      if (response.ok) {
        setShowModal(false)
        setError(null)
        setEmptyField([])
        setName('')
        setEmail('')
        setNumber('')
        setAddress('')
        dispatch({type: 'CREATE_CONTACT', payload: json})
      }

    }


  useEffect(() => {
    const fetchContact = async () => {
      const res = await fetch('http://localhost:4000/api/contact/', {
        method: 'GET',
      })
      const json = await res.json()

      if(res.ok){
        dispatch({type: 'SET_CONTACT', payload: json})
      }
    }

    fetchContact()
  },[dispatch])

  return (
    <div className='h-full md:h-[100vh] w-full bg-slate-100 py-5 px-10'>
      <div className='items-center justify-between flex'>
        <h2 className='text-xl font-bold text-sky-500 uppercase py-5 px-2.5'>Contact List</h2>
        <button
        className="bg-slate-900 text-sky-300 hover:bg-transparent hover:text-slate-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-none outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300"
        type="button"
        onClick={() => setShowModal(true)}>
        Add Contact
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[75vw] md:w-[50vw] lg:w-[25vw] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Contact Form
                  </h3>
                </div>
                {/*body*/}
                <form className="w-full max-w-sm px-2 py-5" onSubmit={handleSubmit} autoComplete="off">
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 lg:lg:px-5">
                      <label className="after:content-['*'] after:text-red-500 block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Name
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input className={emptyField.includes('name') ? 'error' : ''} id="inline-full-name" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 lg:px-5">
                      <label className="after:content-['*'] after:text-red-500 block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="inline-number">
                        Number
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input className={emptyField.includes('number') ? 'error' : ''} id="inline-password" type="number" onChange={(e) => setNumber(e.target.value)} value={number}/>
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 lg:px-5">
                      <label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                        Email
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input id="inline-full-name" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 lg:px-5">
                      <label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="inline-address">
                        Address
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input id="inline-full-name" type="text" onChange={(e) => setAddress(e.target.value)} value={address}/>
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3 flex justify-evenly">
                      <button className="shadow bg-red-500 hover:bg-white hover:text-red-500 hover:shadow-none focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all duration-300" type="button"  onClick={() => setShowModal(false)}>
                        Cancel
                      </button>
                      <button className="shadow bg-lime-500 hover:bg-white hover:text-lime-500 hover:shadow-none focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-all duration-300" type="submit">
                        Add
                      </button>
                    </div>
                  </div>
                  <div className='w-full lg:p-5'>
                    {error && <input className="bg-white border-none text-red-600 text-lg font-bold text-right p-1" onChange={(e) => setError(e)} value={error}/>}
                  </div>
              </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
        <div className='md:flex flex-wrap gap-2 w-full'>
          {contact && contact.map((contact)=> (
            <ContactDetail key={contact._id} contact={contact}/>
          ))}
        </div>
    </div>
 )
}

export default Home