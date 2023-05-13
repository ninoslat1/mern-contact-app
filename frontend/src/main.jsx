import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ContactContextProvider} from '../context/ContactContext'

ReactDOM.createRoot(document.getElementById('root')).render(
        <ContactContextProvider>
            <App />
        </ContactContextProvider>
)
