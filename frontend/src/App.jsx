import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../component/Navbar'

function App() {
  return (
    <div className='w-full'>
      <BrowserRouter>
      <Navbar/>
      <div className="bg-slate-100">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
