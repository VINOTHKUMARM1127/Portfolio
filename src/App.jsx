import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-gradient-to-tr from-purple-900 via-black to-blue-900'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
