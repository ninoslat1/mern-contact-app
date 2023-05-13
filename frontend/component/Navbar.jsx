import {Link} from 'react-router-dom'
import React, { useState } from 'react'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-96">
                    <Link to='/'>
                        <h1 className='text-blue-500 text-3xl font-bold font-rb'>Contact App</h1>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                        <svg className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                    <div className="text-sm lg:flex-grow">

                    </div>
                    <div className='my-5 lg:my-0'>
                        <button className="inline-flex items-center bg-blue-500 border-0 py-2 px-4 rounded-md text-white hover:bg-white hover:text-sky-500 transition-all duration-500">
                            COMING SOON
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar