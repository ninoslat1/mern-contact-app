import {ContactContext}  from "../context/ContactContext"
import { useContext } from "react"

export function useContactContext(){
  const context = useContext(ContactContext)

  if(!context) {
    throw Error('useContactContext must be used inside an ContactContextProvider')
  }

  return context
}
