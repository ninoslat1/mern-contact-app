import { createContext, useReducer } from 'react'

export const ContactContext = createContext()

export const contactReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACT':
      return { 
        contact: action.payload 
      }
    case 'CREATE_CONTACT':
      return { 
        contact: [action.payload, ...state.contact] 
      }
    case 'DELETE_CONTACT':
      return { 
        contact: state.contact.filter((c) => c._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export function ContactContextProvider({ children }){
  const [state, dispatch] = useReducer(contactReducer, { 
    contact: null
  })
  
  return (
    <ContactContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ContactContext.Provider>
  )
}

export default {ContactContext, ContactContextProvider}
