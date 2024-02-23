import { useState } from 'react'
import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages.jsx/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <BrowserRouter>
          <Routes>
          <Route index element = {<Home />}/>
          </Routes>
         </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
